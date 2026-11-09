// Auditoría automática del banco de preguntas: node auditar.js preguntas.js
const fs=require("fs"), vm=require("vm");
const ctx={console}; vm.createContext(ctx);
vm.runInContext(fs.readFileSync(process.argv[2],"utf8")+"\n;this.UNITS=UNITS;this.GEN=GEN;this.REG=REG;this.IRR=IRR;this.timeForms=timeForms;this.ordW=ordW;this.ordS=ordS;this.numW=numW;",ctx);
const {UNITS,GEN}=ctx;
const norm=s=>String(s).toLowerCase().replace(/[’‘`´]/g,"'").replace(/[.!?¿¡,]+/g," ").replace(/\s+/g," ").trim();
let errors=[], warns=[], count=0;
function check(q,where,level){
  const w=`${where}: ${q.q||q.a}`;
  if(!q.p) errors.push(w+" → sin página de referencia");
  if(q.t==="m"||q.t==="l"){
    if(!Array.isArray(q.o)) return errors.push(w+" → sin opciones");
    const all=[q.a,...q.o].map(norm);
    if(new Set(all).size!==all.length) errors.push(w+" → opciones repetidas o la respuesta está entre los distractores: "+JSON.stringify([q.a,...q.o]));
    if(q.o.length<2) errors.push(w+" → menos de 2 distractores");
    if(level!=="f"&&q.o.length<3) warns.push(w+" → solo "+q.o.length+" distractores en "+level);
  }
  if(q.t==="w"){ if(!q.a.length||q.a.some(a=>!norm(a))) errors.push(w+" → respuesta vacía"); }
  if(q.t==="o"){ if(q.a.split(" ").length<3) warns.push(w+" → oración muy corta para ordenar"); if(/___/.test(q.a)) errors.push(w+" → hueco en la oración"); }
  if(q.t==="m"&&/___/.test(q.q)&&q.q.split("___").length>2) errors.push(w+" → dos huecos");
  count++;
}
const ids=new Set();
UNITS.forEach(u=>["f","m","d"].forEach(k=>{
  const where=`File ${u.n} ${k}`;
  if(u[k].length<8) warns.push(`${where}: solo ${u[k].length} preguntas fijas`);
  u[k].forEach(q=>{ check(q,where,k); const id=u.n+"|"+q.t+"|"+q.q+"|"+[].concat(q.a); if(ids.has(id)) errors.push(where+" → pregunta duplicada: "+q.q); ids.add(id); });
}));
// generadores: 3000 corridas por nivel
let gcount=0;
Object.keys(GEN).forEach(n=>["f","m","d"].forEach(k=>{
  for(let i=0;i<3000;i++){ GEN[n][k]().forEach(q=>{ q.p=GEN[n].ref; check(q,`GEN ${n} ${k}`,k); gcount++; }); }
}));
// verificaciones de contenido de los generadores
const T=(h,m,exp)=>{const t=ctx.timeForms(h,m); if(t.ph!==exp) errors.push(`hora ${h}:${m} → «${t.ph}», esperado «${exp}»`);};
T(8,45,"quarter to nine");T(12,45,"quarter to one");T(7,40,"twenty to eight");T(3,0,"three o'clock");T(10,15,"quarter past ten");T(4,30,"half past four");T(11,50,"ten to twelve");T(12,20,"twenty past twelve");
const ORD="first second third fourth fifth sixth seventh eighth ninth tenth eleventh twelfth thirteenth fourteenth fifteenth sixteenth seventeenth eighteenth nineteenth twentieth twenty-first twenty-second twenty-third twenty-fourth twenty-fifth twenty-sixth twenty-seventh twenty-eighth twenty-ninth thirtieth thirty-first".split(" ");
ORD.forEach((w,i)=>{ if(ctx.ordW(i+1)!==w) errors.push(`ordinal ${i+1} → ${ctx.ordW(i+1)} (esperado ${w})`); });
[[1,"1st"],[2,"2nd"],[3,"3rd"],[4,"4th"],[11,"11th"],[12,"12th"],[13,"13th"],[21,"21st"],[22,"22nd"],[23,"23rd"],[31,"31st"]].forEach(([n,e])=>{ if(ctx.ordS(n)!==e) errors.push(`ordS ${n} → ${ctx.ordS(n)}`); });
[[0,"zero"],[13,"thirteen"],[21,"twenty-one"],[40,"forty"],[44,"forty-four"],[99,"ninety-nine"],[100,"a hundred"]].forEach(([n,e])=>{ if(ctx.numW(n)!==e) errors.push(`número ${n} → ${ctx.numW(n)}`); });
console.log(`Preguntas fijas: ${count-gcount}. Preguntas generadas revisadas: ${gcount}.`);
UNITS.forEach(u=>console.log(`File ${u.n}: fácil ${u.f.length} · medio ${u.m.length} · difícil ${u.d.length}${GEN[u.n]?" + generadas":""}`));
console.log(`\nERRORES (${errors.length}):`); [...new Set(errors)].slice(0,60).forEach(e=>console.log(" ✗ "+e));
console.log(`\nAVISOS (${new Set(warns).size}):`); [...new Set(warns)].slice(0,60).forEach(e=>console.log(" · "+e));
process.exit(errors.length?1:0);
