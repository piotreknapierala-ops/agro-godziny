const DEFAULT_EMPLOYEES = [{"name": "Michał Formela", "category": "AGRO-PROJECTS PRODUKCJA", "active": true, "mode": "prodio", "edgeRound": 0, "workRound": 15}, {"name": "Michał Grajewski", "category": "AGRO-PROJECTS PRODUKCJA", "active": true, "mode": "prodio", "edgeRound": 0, "workRound": 15}, {"name": "Oleksandr Khodorovskyi", "category": "AGRO-PROJECTS PRODUKCJA", "active": true, "mode": "prodio", "edgeRound": 0, "workRound": 15}, {"name": "Dmytro Tiahnybida", "category": "KOWSEN POL", "active": true, "mode": "prodio", "edgeRound": 0, "workRound": 15}, {"name": "Serhii  Perevyshnko", "category": "KOWSEN POL", "active": true, "mode": "prodio", "edgeRound": 0, "workRound": 15}, {"name": "Mirosław Kaczmarek", "category": "AGRO-PROJECTS PRODUKCJA", "active": true, "mode": "prodio", "edgeRound": 0, "workRound": 15}, {"name": "Oleksandr Samoilewko", "category": "KOWSEN POL", "active": true, "mode": "prodio", "edgeRound": 0, "workRound": 15}, {"name": "Dmitry Zhuleha", "category": "KOWSEN POL", "active": false, "mode": "prodio", "edgeRound": 0, "workRound": 15}, {"name": "Denis Martynov", "category": "KOWSEN POL", "active": true, "mode": "prodio", "edgeRound": 0, "workRound": 15}, {"name": "Valerii Filonenko", "category": "KOWSEN POL", "active": true, "mode": "prodio", "edgeRound": 0, "workRound": 15}, {"name": "Ryszard Wojciechowski", "category": "AGRO-PROJECTS PRODUKCJA", "active": true, "mode": "prodio", "edgeRound": 0, "workRound": 15}, {"name": "Oleksander Zakharchenko", "category": "KOWSEN POL", "active": false, "mode": "prodio", "edgeRound": 0, "workRound": 15}, {"name": "Dariusz  Kucharzewski", "category": "AGRO-PROJECTS PRODUKCJA", "active": true, "mode": "prodio", "edgeRound": 0, "workRound": 15}, {"name": "Artak Baiazelian", "category": "KOWSEN POL", "active": true, "mode": "prodio", "edgeRound": 0, "workRound": 15}, {"name": "Michał Pogorzelski", "category": "AGRO-PROJECTS PRODUKCJA", "active": true, "mode": "prodio", "edgeRound": 0, "workRound": 15}, {"name": "Denis Semchyshyn", "category": "AGRO-PROJECTS PRODUKCJA", "active": true, "mode": "prodio", "edgeRound": 0, "workRound": 15}, {"name": "Paweł Derda", "category": "ZLECENIE", "active": true, "mode": "prodio", "edgeRound": 0, "workRound": 15}, {"name": "Andrii Isaiev", "category": "AGRO-PROJECTS PRODUKCJA", "active": false, "mode": "prodio", "edgeRound": 0, "workRound": 15}, {"name": "Oleksandr Shestak", "category": "AGRO-PROJECTS PRODUKCJA", "active": true, "mode": "prodio", "edgeRound": 0, "workRound": 15}, {"name": "Łukasz Żak", "category": "AGRO-PROJECTS PRODUKCJA", "active": true, "mode": "prodio", "edgeRound": 0, "workRound": 15}, {"name": "Patryk Ratajczak", "category": "AGRO-PROJECTS PRODUKCJA", "active": true, "mode": "prodio", "edgeRound": 0, "workRound": 15}, {"name": "Łukasz Kmiecik", "category": "AGRO-PROJECTS PRODUKCJA", "active": true, "mode": "prodio", "edgeRound": 0, "workRound": 15}, {"name": "Patryk Szymański", "category": "AGRO-PROJECTS PRODUKCJA", "active": true, "mode": "prodio", "edgeRound": 0, "workRound": 15}, {"name": "Roman Viashehenko", "category": "KOWSEN POL", "active": true, "mode": "prodio", "edgeRound": 0, "workRound": 15}, {"name": "Kacper Pietrasz", "category": "AGRO-PROJECTS PRODUKCJA", "active": false, "mode": "prodio", "edgeRound": 0, "workRound": 15}, {"name": "Wojtek Rawecki", "category": "AGRO-PROJECTS PRODUKCJA", "active": true, "mode": "prodio", "edgeRound": 0, "workRound": 15}, {"name": "Tomasz Sobik", "category": "AGRO-PROJECTS PRODUKCJA", "active": true, "mode": "prodio", "edgeRound": 0, "workRound": 15}, {"name": "Bartosz Antkowiak", "category": "AGRO-PROJECTS PRODUKCJA", "active": true, "mode": "prodio", "edgeRound": 0, "workRound": 15}, {"name": "Mateusz Gronostaj", "category": "AGRO-PROJECTS PRODUKCJA", "active": false, "mode": "prodio", "edgeRound": 0, "workRound": 15}, {"name": "Artur Piasecki", "category": "AGRO-PROJECTS PRODUKCJA", "active": true, "mode": "prodio", "edgeRound": 0, "workRound": 15}, {"name": "Oleksander Rzuh", "category": "KOWSEN POL", "active": false, "mode": "prodio", "edgeRound": 0, "workRound": 15}, {"name": "Marcin Walicht", "category": "AGRO-PROJECTS PRODUKCJA", "active": true, "mode": "prodio", "edgeRound": 0, "workRound": 15}, {"name": "Wojciech Nowak", "category": "MAGAZYN", "active": true, "mode": "manual", "edgeRound": 0, "workRound": 0}, {"name": "Paweł Kruszona", "category": "MAGAZYN", "active": true, "mode": "manual", "edgeRound": 0, "workRound": 0}, {"name": "Łukasz Grygier", "category": "MAGAZYN", "active": true, "mode": "manual", "edgeRound": 0, "workRound": 0}, {"name": "Michał Nowak", "category": "MAGAZYN", "active": true, "mode": "manual", "edgeRound": 0, "workRound": 0}, {"name": "Mateusz Dudzmal", "category": "SERWIS", "active": true, "mode": "manual", "edgeRound": 0, "workRound": 0}, {"name": "Marek Paszkiewicz", "category": "SERWIS", "active": true, "mode": "manual", "edgeRound": 0, "workRound": 0}, {"name": "Filip Zajc", "category": "AGRO-PROJECTS PRODUKCJA", "active": true, "mode": "prodio", "edgeRound": 0, "workRound": 15}, {"name": "Ihor Shkrybliak", "category": "KOWSEN POL", "active": false, "mode": "prodio", "edgeRound": 0, "workRound": 15}, {"name": "Vasyl Tkachenko", "category": "KOWSEN POL", "active": false, "mode": "prodio", "edgeRound": 0, "workRound": 15}, {"name": "Yevhenii Rylin", "category": "KOWSEN POL", "active": false, "mode": "prodio", "edgeRound": 0, "workRound": 15}, {"name": "Volodymyr Myhal", "category": "KOWSEN POL", "active": false, "mode": "prodio", "edgeRound": 0, "workRound": 15}, {"name": "Anatolii Proskurnia", "category": "KOWSEN POL", "active": false, "mode": "prodio", "edgeRound": 0, "workRound": 15}, {"name": "Oleksandr Litvinov", "category": "KOWSEN POL", "active": false, "mode": "prodio", "edgeRound": 0, "workRound": 15}, {"name": "Denys Sydorov", "category": "KOWSEN POL", "active": true, "mode": "prodio", "edgeRound": 30, "workRound": 15}, {"name": "Yevhen Rydun", "category": "KOWSEN POL", "active": false, "mode": "prodio", "edgeRound": 0, "workRound": 15}, {"name": "Illia Stacodub", "category": "KOWSEN POL", "active": false, "mode": "prodio", "edgeRound": 0, "workRound": 15}, {"name": "Jarosław Gintrowski", "category": "MAGAZYN", "active": false, "mode": "prodio", "edgeRound": 0, "workRound": 15}, {"name": "Kostiantyn Audshkin", "category": "KOWSEN POL", "active": true, "mode": "prodio", "edgeRound": 0, "workRound": 15}, {"name": "Jonasz Drews", "category": "AGRO-PROJECTS PRODUKCJA", "active": true, "mode": "prodio", "edgeRound": 0, "workRound": 15}, {"name": "Kushłym Maksym", "category": "KOWSEN POL", "active": true, "mode": "prodio", "edgeRound": 0, "workRound": 15}, {"name": "Yevhen Tyshchenko", "category": "KOWSEN POL", "active": true, "mode": "prodio", "edgeRound": 0, "workRound": 15}, {"name": "Dmitry Shpak", "category": "KOWSEN POL", "active": false, "mode": "prodio", "edgeRound": 0, "workRound": 15}, {"name": "Mykola Mumeniuk", "category": "KOWSEN POL", "active": false, "mode": "prodio", "edgeRound": 0, "workRound": 15}, {"name": "Mariusz Durzyński", "category": "MAGAZYN", "active": true, "mode": "prodio", "edgeRound": 30, "workRound": 0}, {"name": "Bartosz Grajewski", "category": "AGRO-PROJECTS PRODUKCJA", "active": true, "mode": "prodio", "edgeRound": 0, "workRound": 15}, {"name": "Edgar Losan", "category": "KOWSEN POL", "active": true, "mode": "prodio", "edgeRound": 0, "workRound": 15}, {"name": "Marek Marciniak", "category": "MAGAZYN", "active": true, "mode": "manual", "edgeRound": 0, "workRound": 0}, {"name": "Bogdan Vereshchak", "category": "KOWSEN POL", "active": true, "mode": "prodio", "edgeRound": 0, "workRound": 15}, {"name": "Mateusz Brudło", "category": "AGRO-PROJECTS PRODUKCJA", "active": false, "mode": "prodio", "edgeRound": 0, "workRound": 15}, {"name": "Artem Welemety", "category": "AGRO-PROJECTS PRODUKCJA", "active": false, "mode": "prodio", "edgeRound": 0, "workRound": 15}, {"name": "Serhij Nerukh", "category": "KOWSEN POL", "active": true, "mode": "prodio", "edgeRound": 0, "workRound": 15}, {"name": "Ivan Vozobel", "category": "KOWSEN POL", "active": true, "mode": "prodio", "edgeRound": 0, "workRound": 15}, {"name": "Filip Sobik", "category": "AGRO-PROJECTS PRODUKCJA", "active": true, "mode": "prodio", "edgeRound": 0, "workRound": 15}, {"name": "Maciej Dziedzic", "category": "AGRO-PROJECTS PRODUKCJA", "active": true, "mode": "prodio", "edgeRound": 0, "workRound": 15}, {"name": "Dmitri Titarenko", "category": "KOWSEN POL", "active": true, "mode": "prodio", "edgeRound": 0, "workRound": 15}];
let ABSENCE_CODES = [{"code": "UW", "label": "Urlop wypoczynkowy"}, {"code": "Ch", "label": "Zwolnienie lekarskie"}, {"code": "Op", "label": "Zwolnienie lekarskie - opieka"}, {"code": "Um", "label": "Urlop macierzyński"}, {"code": "Uwych", "label": "Urlop wychowawczy"}, {"code": "Uok", "label": "Urlop okolicznościowy"}, {"code": "NpK", "label": "Oddanie krwi"}, {"code": "Uwż", "label": "Urlop na żądanie"}, {"code": "Del", "label": "Delegacja"}, {"code": "Dw", "label": "Dzień wolny za przepracowaną sobotę"}, {"code": "NpL", "label": "Dzień wolny orzeczenie lekarskie"}, {"code": "NpS", "label": "Świadek  w sądzie"}, {"code": "UWop", "label": "Urlop opieka (te dwa dni na dziecko)"}];
const CATEGORIES = ["AGRO-PROJECTS PRODUKCJA","KOWSEN POL","ZLECENIE","MAGAZYN","SERWIS","NIEPRZYPISANY"];
const STORAGE_KEY = "agroGodzinyStateV1";
const CONFIG_KEY = "agroGodzinyEmployeesV1";

let employees = loadEmployees();
let state = loadState();
let rawCount = 0;
let currentRecords = [];

const $ = sel => document.querySelector(sel);
const $$ = sel => [...document.querySelectorAll(sel)];
function pad(n){ return String(n).padStart(2,"0"); }
const normalizeName = s => String(s ?? "").replace(/\s+/g," ").trim();
const canonical = s => normalizeName(s).toLocaleLowerCase("pl-PL");
const minutesToText = m => m === null || m === undefined || Number.isNaN(m) ? "" : `${Math.floor(m/60)}:${pad(Math.round(m%60))}`;
const timeToText = m => {
  if(m === null || m === undefined || Number.isNaN(m)) return "";
  const total = ((Math.round(Number(m)) % 1440) + 1440) % 1440;
  return `${pad(Math.floor(total/60))}:${pad(total%60)}`;
};
const textToMinutes = t => { if(!t) return null; const m=String(t).match(/^(\d{1,2}):(\d{2})$/); return m ? Number(m[1])*60+Number(m[2]) : null; };
const dayNames = ["niedziela","poniedziałek","wtorek","środa","czwartek","piątek","sobota"];
const polishMonth = ["styczeń","luty","marzec","kwiecień","maj","czerwiec","lipiec","sierpień","wrzesień","październik","listopad","grudzień"];

function cloneDefaultEmployees(){ return JSON.parse(JSON.stringify(DEFAULT_EMPLOYEES)); }
function loadEmployees(){
  try { const x=JSON.parse(localStorage.getItem(CONFIG_KEY)); if(Array.isArray(x)&&x.length) return x; } catch(e){}
  return cloneDefaultEmployees();
}
function loadState(){
  try { const x=JSON.parse(localStorage.getItem(STORAGE_KEY)); if(x&&x.month&&Array.isArray(x.rows)) return x; } catch(e){}
  const now=new Date(); return {month:`${now.getFullYear()}-${pad(now.getMonth()+1)}`,rows:[],sunday100:false,autoUnknown:true,sourceName:""};
}
function saveAll(){
  localStorage.setItem(STORAGE_KEY,JSON.stringify(state));
  localStorage.setItem(CONFIG_KEY,JSON.stringify(employees));
  $("#saveState").textContent="● zapisano lokalnie";
  setTimeout(()=>$("#saveState").textContent="● gotowe",900);
}
function employeeByName(name){ const k=canonical(name); return employees.find(e=>canonical(e.name)===k); }
function getMonthParts(){ const [y,m]=($("#monthInput").value||state.month).split("-").map(Number); return {y,m,days:new Date(y,m,0).getDate()}; }
function dateKey(y,m,d){ return `${y}-${pad(m)}-${pad(d)}`; }
function localDateFromKey(k){ const [y,m,d]=k.split("-").map(Number); return new Date(y,m-1,d,12,0,0); }
function isSameMonth(dt,y,m){ return dt && dt.getFullYear()===y && dt.getMonth()+1===m; }
function roundNearest(min,step){ return step ? Math.round(min/step)*step : min; }
function roundUp(min,step){ return step ? Math.ceil(min/step)*step : min; }
function durationMinutes(start,stop){ if(start===null||stop===null) return null; let d=stop-start; if(d<0) d+=1440; return d; }
function statusForRow(r){
  if(r.start===null && r.stop===null) return r.absence ? {type:"ok",text:"nieobecność"}:{type:"ok",text:"—"};
  if(r.start===null || r.stop===null) return {type:"error",text:"brak Start/Stop"};
  const dur=durationMinutes(r.start,r.stop);
  if(dur===0) return {type:"error",text:"0 h"};
  if(dur>16*60) return {type:"warn",text:"> 16 h"};
  return {type:"ok",text:"OK"};
}
function recalcRow(r){
  const e=employeeByName(r.employee) || {workRound:15};
  let dur=durationMinutes(r.start,r.stop);
  if(dur===null){ r.work=null; r.ot50=null; r.ot100=null; return; }
  r.work=roundNearest(dur,Number(e.workRound)||0);
  const dt=localDateFromKey(r.date), dow=dt.getDay();
  const weekend100 = dow===6 || (state.sunday100 && dow===0);
  r.ot100=weekend100 ? r.work : null;
  r.ot50=weekend100 ? null : Math.max(0,r.work-480);
}
function makeBlankRows(){
  const {y,m,days}=getMonthParts(); const rows=[];
  for(const e of employees.filter(x=>x.active)){
    for(let d=1;d<=days;d++){
      const date=dateKey(y,m,d);
      rows.push({id:`${canonical(e.name)}|${date}`,date,employee:e.name,category:e.category,start:null,stop:null,work:null,ot50:null,ot100:null,absence:"",source:e.mode==="manual"?"manual":"prodio",edited:false,rawHits:0});
    }
  }
  return rows;
}
function ensureRows(){
  if(!state.rows.length){ state.rows=makeBlankRows(); saveAll(); }
}
function syncRowsWithEmployees(){
  const {y,m,days}=getMonthParts(); const old=new Map(state.rows.map(r=>[`${canonical(r.employee)}|${r.date}`,r])); const next=[];
  for(const e of employees.filter(x=>x.active)){
    for(let d=1;d<=days;d++){
      const date=dateKey(y,m,d), key=`${canonical(e.name)}|${date}`; const r=old.get(key);
      next.push(r ? {...r,employee:e.name,category:e.category} : {id:key,date,employee:e.name,category:e.category,start:null,stop:null,work:null,ot50:null,ot100:null,absence:"",source:e.mode==="manual"?"manual":"prodio",edited:false,rawHits:0});
    }
  }
  state.rows=next; state.month=`${y}-${pad(m)}`; state.rows.forEach(recalcRow); saveAll(); renderAll();
}

function parseDateTime(v){
  if(v===null||v===undefined||v==="") return null;
  if(v instanceof Date && !Number.isNaN(v.getTime())) return new Date(v.getTime());
  if(typeof v==="number"){
    const epoch=new Date(1899,11,30,0,0,0); return new Date(epoch.getTime()+v*86400000);
  }
  if(typeof v==="object"){
    if(v.result!==undefined) return parseDateTime(v.result);
    if(v.text!==undefined) return parseDateTime(v.text);
    if(Array.isArray(v.richText)) return parseDateTime(v.richText.map(x=>x.text).join(""));
  }
  let s=String(v).trim();
  let mt=s.match(/^(\d{4})[-/.](\d{1,2})[-/.](\d{1,2})[ T](\d{1,2}):(\d{2})(?::(\d{2}))?/);
  if(mt) return new Date(+mt[1],+mt[2]-1,+mt[3],+mt[4],+mt[5],+(mt[6]||0));
  mt=s.match(/^(\d{1,2})[.\/-](\d{1,2})[.\/-](\d{4})[ T](\d{1,2}):(\d{2})(?::(\d{2}))?/);
  if(mt) return new Date(+mt[3],+mt[2]-1,+mt[1],+mt[4],+mt[5],+(mt[6]||0));
  const d=new Date(s); return Number.isNaN(d.getTime())?null:d;
}
function minutesOfDay(dt){ return dt.getHours()*60+dt.getMinutes()+dt.getSeconds()/60; }
function unwrap(v){ if(v&&typeof v==="object" && !(v instanceof Date)){ if(v.result!==undefined) return v.result; if(v.text!==undefined) return v.text; if(v.richText) return v.richText.map(x=>x.text).join(""); } return v; }
function normHeader(s){ return normalizeName(unwrap(s)).toLocaleLowerCase("pl-PL").replace(/[._-]/g," "); }
function findHeaderIndex(headers, wanted){ const w=normHeader(wanted); return headers.findIndex(h=>normHeader(h)===w); }

// --- Fast XLSX reader -------------------------------------------------------
// Reads only the worksheet XML that we need. It does not load styles, formulas,
// drawings or the remaining Prodio columns into a workbook object model.
function xmlDecode(s){
  return String(s??"")
    .replace(/&#x([0-9a-f]+);/gi,(_,h)=>String.fromCodePoint(parseInt(h,16)))
    .replace(/&#(\d+);/g,(_,d)=>String.fromCodePoint(parseInt(d,10)))
    .replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"')
    .replace(/&apos;/g,"'").replace(/&amp;/g,"&");
}
function u16(dv,o){return dv.getUint16(o,true)}
function u32(dv,o){return dv.getUint32(o,true)}
function parseZipDirectory(buffer){
  const dv=new DataView(buffer); let eocd=-1;
  const min=Math.max(0,dv.byteLength-65557);
  for(let i=dv.byteLength-22;i>=min;i--){if(u32(dv,i)===0x06054b50){eocd=i;break;}}
  if(eocd<0) throw new Error("To nie wygląda na prawidłowy plik XLSX.");
  const total=u16(dv,eocd+10), cdOffset=u32(dv,eocd+16), entries=new Map();
  let p=cdOffset; const dec=new TextDecoder("utf-8");
  for(let i=0;i<total;i++){
    if(u32(dv,p)!==0x02014b50) throw new Error("Nie udało się odczytać struktury XLSX.");
    const method=u16(dv,p+10), compSize=u32(dv,p+20), uncompSize=u32(dv,p+24);
    const nameLen=u16(dv,p+28), extraLen=u16(dv,p+30), commentLen=u16(dv,p+32), localOffset=u32(dv,p+42);
    const name=dec.decode(new Uint8Array(buffer,p+46,nameLen));
    entries.set(name,{method,compSize,uncompSize,localOffset});
    p+=46+nameLen+extraLen+commentLen;
  }
  return {buffer,entries};
}
async function zipEntryBytes(zip,name){
  const e=zip.entries.get(name); if(!e) return null;
  const dv=new DataView(zip.buffer), p=e.localOffset;
  if(u32(dv,p)!==0x04034b50) throw new Error("Uszkodzony wpis w pliku XLSX.");
  const nameLen=u16(dv,p+26), extraLen=u16(dv,p+28), start=p+30+nameLen+extraLen;
  const src=new Uint8Array(zip.buffer,start,e.compSize);
  if(e.method===0) return new Uint8Array(src);
  if(e.method!==8) throw new Error(`Nieobsługiwana metoda kompresji XLSX (${e.method}).`);
  if(typeof DecompressionStream==="undefined") throw new Error("Ta przeglądarka nie obsługuje szybkiego odczytu XLSX. Użyj aktualnego Chrome/Edge.");
  const stream=new Blob([src]).stream().pipeThrough(new DecompressionStream("deflate-raw"));
  return new Uint8Array(await new Response(stream).arrayBuffer());
}
async function zipEntryText(zip,name){const b=await zipEntryBytes(zip,name); return b?new TextDecoder("utf-8").decode(b):null;}
function normalizeZipPath(target){
  target=xmlDecode(target).replace(/\\/g,"/");
  if(target.startsWith("/")) return target.slice(1);
  target=target.replace(/^\.\//,"");
  return target.startsWith("xl/")?target:`xl/${target}`;
}
function parseSharedStrings(xml){
  if(!xml) return [];
  const out=[]; const si=/<si\b[^>]*>([\s\S]*?)<\/si>/g; let m;
  while((m=si.exec(xml))){let txt="",tm; const tr=/<t(?:\s[^>]*)?>([\s\S]*?)<\/t>/g; while((tm=tr.exec(m[1])))txt+=xmlDecode(tm[1]); out.push(txt);}
  return out;
}
function decodeCell(attrs,inner,shared){
  const tm=attrs.match(/\bt="([^"]+)"/), type=tm?tm[1]:"";
  if(type==="inlineStr"){let txt="",x;const r=/<t(?:\s[^>]*)?>([\s\S]*?)<\/t>/g;while((x=r.exec(inner)))txt+=xmlDecode(x[1]);return txt;}
  const vm=inner.match(/<v>([\s\S]*?)<\/v>/); if(!vm)return ""; const raw=xmlDecode(vm[1]);
  if(type==="s") return shared[Number(raw)]??"";
  if(type==="str"||type==="d") return raw;
  if(type==="b") return raw==="1";
  const n=Number(raw); return Number.isFinite(n)?n:raw;
}
function parseRowValues(rowXml,rowNum,shared){
  const out={}; const re=/<c\b([^>]*)\br="([A-Z]+)(\d+)"([^>]*)>([\s\S]*?)<\/c>/g; let m;
  while((m=re.exec(rowXml))){out[m[2]]=decodeCell((m[1]||"")+(m[4]||""),m[5],shared);}
  return out;
}
function firstRowValues(sheetXml,shared){
  const m=sheetXml.match(/<row\b[^>]*\br="1"[^>]*>([\s\S]*?)<\/row>/); return m?parseRowValues(m[1],1,shared):{};
}
function findProdioColumns(sheetXml,shared){
  const vals=firstRowValues(sheetXml,shared), result={};
  for(const [col,val] of Object.entries(vals)){
    const h=normHeader(val); if(h==="pracownik")result.employee=col; if(h==="start")result.start=col; if(h==="stop")result.stop=col;
  }
  return result.employee&&result.start&&result.stop?result:null;
}
function parseProdioSheet(sheetXml,shared,cols){
  const wanted=[cols.employee,cols.start,cols.stop];
  const alt=wanted.map(x=>x.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")).join("|");
  const re=new RegExp(`<c\\b([^>]*)\\br="(${alt})(\\d+)"([^>]*)>([\\s\\S]*?)<\\/c>`,"g");
  const rows=[]; let current=0, rec=null, m;
  const push=()=>{if(rec&&(rec.employee||rec.start||rec.stop))rows.push(rec);};
  while((m=re.exec(sheetXml))){
    const rn=Number(m[3]); if(rn===1)continue;
    if(rn!==current){push();current=rn;rec={employee:"",start:"",stop:""};}
    const val=decodeCell((m[1]||"")+(m[4]||""),m[5],shared);
    if(m[2]===cols.employee)rec.employee=val; else if(m[2]===cols.start)rec.start=val; else if(m[2]===cols.stop)rec.stop=val;
  }
  push(); return rows;
}
function parseReferenceSheet(sheetXml,shared){
  const employeesOut=[], absenceRaw=[]; const rr=/<row\b[^>]*\br="(\d+)"[^>]*>([\s\S]*?)<\/row>/g; let m;
  while((m=rr.exec(sheetXml))){
    const v=parseRowValues(m[2],Number(m[1]),shared); const name=normalizeName(v.B), cat=normalizeName(v.C), a=normalizeName(v.A);
    if(name&&CATEGORIES.includes(cat)&&cat!=="NIEPRZYPISANY")employeesOut.push({name,category:cat});
    if(a)absenceRaw.push(a);
  }
  const byCode=new Map();
  for(const x of absenceRaw){const mt=x.match(/^(\S+)\s*(.*)$/);if(!mt)continue;const code=mt[1],label=mt[2].trim();if(!byCode.has(code))byCode.set(code,[]);if(label&&!byCode.get(code).includes(label))byCode.get(code).push(label);}
  const abs=[...byCode.entries()].map(([code,labels])=>({code,label:labels.join(" / ")}));
  return {employees:employeesOut,absences:abs};
}
function mergeImportedConfiguration(imported,absences){
  if(imported?.length){
    const old=new Map(employees.map(e=>[canonical(e.name),e])); const next=[];
    for(const x of imported){
      const prev=old.get(canonical(x.name));
      if(prev) next.push({...prev,name:x.name,category:x.category});
      else {
        let mode=(x.category==="MAGAZYN"||x.category==="SERWIS")?"manual":"prodio", edgeRound=0, workRound=mode==="prodio"?15:0;
        if(canonical(x.name)===canonical("Denys Sydorov")){mode="prodio";edgeRound=30;workRound=15;}
        if(canonical(x.name)===canonical("Mariusz Durzyński")){mode="prodio";edgeRound=30;workRound=0;}
        next.push({name:x.name,category:x.category,active:true,mode,edgeRound,workRound});
      }
    }
    employees=next;
  }
  if(absences?.length) ABSENCE_CODES=absences;
  localStorage.setItem(CONFIG_KEY,JSON.stringify(employees));
}
async function rowsFromExcel(file){
  const buffer=await file.arrayBuffer(); const zip=parseZipDirectory(buffer);
  const workbookXml=await zipEntryText(zip,"xl/workbook.xml"), relsXml=await zipEntryText(zip,"xl/_rels/workbook.xml.rels");
  if(!workbookXml||!relsXml) throw new Error("Brak struktury skoroszytu XLSX.");
  const shared=parseSharedStrings(await zipEntryText(zip,"xl/sharedStrings.xml"));
  const rels=new Map(); let rm; const rr=/<Relationship\b[^>]*\bId="([^"]+)"[^>]*\bTarget="([^"]+)"[^>]*\/?\s*>/g;
  while((rm=rr.exec(relsXml)))rels.set(rm[1],normalizeZipPath(rm[2]));
  const sheets=[]; let sm; const sr=/<sheet\b[^>]*\bname="([^"]+)"[^>]*\br:id="([^"]+)"[^>]*\/?\s*>/g;
  while((sm=sr.exec(workbookXml))){const path=rels.get(sm[2]);if(path)sheets.push({name:xmlDecode(sm[1]),path});}
  if(!sheets.length)throw new Error("Nie znaleziono arkuszy w pliku.");

  let prodio=null, reference=null;
  for(const s of sheets){
    const xml=await zipEntryText(zip,s.path); if(!xml)continue; const cols=findProdioColumns(xml,shared);
    if(cols&&!prodio) prodio={...s,xml,cols}; else if(!reference){const ref=parseReferenceSheet(xml,shared);if(ref.employees.length>=5)reference={...s,ref};}
  }
  if(!prodio)throw new Error("Nie znalazłem arkusza z nagłówkami Pracownik / Start / Stop.");
  if(reference)mergeImportedConfiguration(reference.ref.employees,reference.ref.absences);
  const records=parseProdioSheet(prodio.xml,shared,prodio.cols);
  return {records,meta:{prodioSheet:prodio.name,referenceSheet:reference?.name||"",employees:reference?.ref.employees.length||0,absences:reference?.ref.absences.length||0}};
}

function parseDelimited(text){
  text=text.replace(/^\uFEFF/,"").trim(); if(!text) return [];
  const first=text.split(/\r?\n/,1)[0]; const delim=first.includes("\t")?"\t":((first.match(/;/g)||[]).length>(first.match(/,/g)||[]).length?";":",");
  const lines=[]; let row=[],cell="",q=false;
  for(let i=0;i<text.length;i++){
    const ch=text[i];
    if(ch==='"'){ if(q&&text[i+1]==='"'){cell+='"';i++;} else q=!q; }
    else if(!q && ch===delim){row.push(cell);cell="";}
    else if(!q && (ch==='\n'||ch==='\r')){ if(ch==='\r'&&text[i+1]==='\n')i++; row.push(cell); lines.push(row); row=[]; cell=""; }
    else cell+=ch;
  }
  row.push(cell); lines.push(row);
  const headers=lines.shift()||[]; const ie=findHeaderIndex(headers,"Pracownik"), is=findHeaderIndex(headers,"Start"), ip=findHeaderIndex(headers,"Stop");
  if(ie<0||is<0||ip<0) throw new Error("W nagłówkach nie znaleziono kolumn Pracownik / Start / Stop.");
  return lines.filter(r=>r.some(x=>String(x).trim())).map(r=>({employee:r[ie],start:r[is],stop:r[ip]}));
}
async function rowsFromFile(file){
  const ext=(file.name.split(".").pop()||"").toLowerCase();
  if(["xlsx","xlsm"].includes(ext)) return rowsFromExcel(file);
  return {records:parseDelimited(await file.text()),meta:{prodioSheet:"CSV/TXT",referenceSheet:"",employees:0,absences:0}};
}
function latestMonth(records){
  let latest=null; for(const r of records){for(const v of [r.start,r.stop]){const d=parseDateTime(v);if(d){const k=`${d.getFullYear()}-${pad(d.getMonth()+1)}`;if(!latest||k>latest)latest=k;break;}}} return latest;
}
function addUnknownEmployee(name){
  const n=normalizeName(name); if(!n||employeeByName(n)||!state.autoUnknown) return;
  employees.push({name:n,category:"NIEPRZYPISANY",active:true,mode:"prodio",edgeRound:0,workRound:15});
}
function processRecords(records,sourceName=""){
  if(!records.length) throw new Error("Brak danych do przeliczenia.");
  rawCount=records.length;
  currentRecords = records;
  const latest=latestMonth(records);
  const selected=$("#monthInput").value||state.month;
  const selectedHasData=records.some(r=>{const d=parseDateTime(r.start)||parseDateTime(r.stop);return d&&`${d.getFullYear()}-${pad(d.getMonth()+1)}`===selected;});
  state.month=selected;
  records.forEach(r=>addUnknownEmployee(r.employee));
  const previous=new Map(state.rows.filter(r=>r.edited||r.absence||r.source==="manual").map(r=>[`${canonical(r.employee)}|${r.date}`,r]));
  state.rows=makeBlankRows(); const {y,m}=getMonthParts();
  const grouped=new Map();
  for(const rec of records){
    const emp=normalizeName(rec.employee); if(!emp) continue; const cfg=employeeByName(emp); if(!cfg||!cfg.active||cfg.mode!=="prodio") continue;
    const sd=parseDateTime(rec.start), ed=parseDateTime(rec.stop); const basis=sd||ed; if(!basis||!isSameMonth(basis,y,m)) continue;
    const dk=dateKey(y,m,basis.getDate()), key=`${canonical(cfg.name)}|${dk}`;
    let g=grouped.get(key); if(!g){g={starts:[],stops:[],hits:0};grouped.set(key,g);} g.hits++;
    if(sd&&isSameMonth(sd,y,m)) g.starts.push(minutesOfDay(sd));
    if(ed&&isSameMonth(ed,y,m)) g.stops.push(minutesOfDay(ed));
  }
  const byKey=new Map(state.rows.map(r=>[`${canonical(r.employee)}|${r.date}`,r]));
  for(const [key,g] of grouped){
    const r=byKey.get(key); if(!r) continue; const cfg=employeeByName(r.employee);
    if(g.starts.length) r.start=Math.min(...g.starts);
    if(g.stops.length) r.stop=Math.max(...g.stops);
    if(cfg.edgeRound){ if(r.start!==null) r.start=roundUp(r.start,cfg.edgeRound); if(r.stop!==null) r.stop=roundUp(r.stop,cfg.edgeRound); }
    r.rawHits=g.hits; r.source="prodio"; recalcRow(r);
  }
  // Carry forward manual edits/absences from the same month.
  for(const [key,old] of previous){ const r=byKey.get(key); if(!r) continue; if(old.edited||old.source==="manual"){r.start=old.start;r.stop=old.stop;r.edited=old.edited;r.source=old.source;} if(old.absence)r.absence=old.absence; recalcRow(r); }
  state.sourceName=sourceName; state.sunday100=$("#sunday100").checked; state.autoUnknown=$("#autoUnknown").checked; saveAll(); renderAll();
  const unknown=[...new Set(records.map(r=>normalizeName(r.employee)).filter(n=>n&&(!employeeByName(n)||employeeByName(n).category==="NIEPRZYPISANY")))];
  if(!selectedHasData){
    setStatus(`Brak danych Prodio za ${state.month}${latest?` · ostatni miesiąc z danymi: ${latest}`:""}.`,"warn");
  } else {
    setStatus(`Przeliczono ${records.length.toLocaleString("pl-PL")} rekordów · miesiąc ${state.month}${unknown.length?` · ${unknown.length} nazwisk spoza listy pracowników – sprawdź zakładkę 4`:""}.`,unknown.length?"warn":"ok");
  }
}

function setStatus(txt,type="ok"){ const b=$("#statusBox"); b.textContent=txt; b.className="status-box"+(type==="error"?" error":type==="warn"?" warn":""); }
function renderStats(){
  const used=state.rows.filter(r=>r.start!==null||r.stop!==null); const emps=new Set(used.map(r=>canonical(r.employee)));
  $("#statRecords").textContent=rawCount.toLocaleString("pl-PL"); $("#statEmployees").textContent=emps.size; $("#statDays").textContent=used.length; $("#statWarnings").textContent=state.rows.filter(r=>["warn","error"].includes(statusForRow(r).type)).length;
}
function renderFilters(){
  const fc=$("#filterCategory"), fe=$("#filterEmployee");
  const oldC=fc.value||"ALL", oldE=fe.value||"ALL";

  fc.innerHTML=`<option value="ALL">Wszystkie</option>`+CATEGORIES.map(c=>`<option value="${escapeHtml(c)}">${escapeHtml(c)}</option>`).join("");
  if([...fc.options].some(x=>x.value===oldC)) fc.value=oldC;
  else fc.value="ALL";

  const selectedCategory=fc.value||"ALL";
  const visibleEmployees=employees
    .filter(e=>e.active&&(selectedCategory==="ALL"||e.category===selectedCategory))
    .sort((a,b)=>a.name.localeCompare(b.name,"pl"));

  fe.innerHTML=`<option value="ALL">Wszyscy</option>`+visibleEmployees
    .map(e=>`<option value="${escapeHtml(e.name)}">${escapeHtml(e.name)}</option>`).join("");

  if([...fe.options].some(x=>x.value===oldE)) fe.value=oldE;
  else fe.value="ALL";
}
function escapeHtml(s){ return String(s??"").replace(/[&<>"']/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[ch])); }
function absenceOptions(selected){ return `<option value="">—</option>`+ABSENCE_CODES.map(x=>`<option value="${escapeHtml(x.code)}" ${x.code===selected?"selected":""}>${escapeHtml(x.code)} — ${escapeHtml(x.label)}</option>`).join(""); }
function renderRecords(){
  const cat=$("#filterCategory").value||"ALL", emp=$("#filterEmployee").value||"ALL", view=$("#filterRows").value||"used";
  let rows=state.rows.filter(r=>(cat==="ALL"||r.category===cat)&&(emp==="ALL"||r.employee===emp));
  if(view==="used")rows=rows.filter(r=>r.start!==null||r.stop!==null||r.absence);
  if(view==="warnings")rows=rows.filter(r=>["warn","error"].includes(statusForRow(r).type));
  if(view==="absence")rows=rows.filter(r=>r.absence);
  rows.sort((a,b)=>a.date.localeCompare(b.date)||a.employee.localeCompare(b.employee,"pl"));
  $("#recordsTable tbody").innerHTML=rows.map(r=>{
    const st=statusForRow(r), dt=localDateFromKey(r.date), src=r.edited?"edit":r.source;
    const srcLabel=src==="prodio"?"Prodio":src==="manual"?"Ręcznie":"Korekta";
    return `<tr data-id="${escapeHtml(r.id)}">
      <td>${r.date}</td><td>${dayNames[dt.getDay()]}</td><td><b>${escapeHtml(r.employee)}</b></td><td>${escapeHtml(r.category)}</td>
      <td><input class="time-input start-input" type="time" step="60" value="${timeToText(r.start)}"></td>
      <td><input class="time-input stop-input" type="time" step="60" value="${timeToText(r.stop)}"></td>
      <td><b>${minutesToText(r.work)}</b></td><td>${minutesToText(r.ot50)}</td><td>${minutesToText(r.ot100)}</td>
      <td><select class="absence-select">${absenceOptions(r.absence)}</select></td>
      <td><span class="badge badge-${src}">${srcLabel}</span>${r.rawHits?` <small>${r.rawHits} wpis.</small>`:""}</td>
      <td><span class="badge badge-${st.type}">${st.text}</span></td></tr>`;
  }).join("") || `<tr><td colspan="12" class="empty">Brak wpisów dla wybranego filtra.</td></tr>`;
}
function totals(){
  const map=new Map(); for(const e of employees.filter(x=>x.active)) map.set(canonical(e.name),{employee:e.name,category:e.category,work:0,ot50:0,ot100:0,abs:new Map(),days:0});
  for(const r of state.rows){ const t=map.get(canonical(r.employee)); if(!t)continue; if(r.work!==null){t.work+=r.work;t.days++;} if(r.ot50)t.ot50+=r.ot50; if(r.ot100)t.ot100+=r.ot100; if(r.absence)t.abs.set(r.absence,(t.abs.get(r.absence)||0)+1); }
  return [...map.values()];
}
function renderSummary(){
  const ts=totals().sort((a,b)=>a.category.localeCompare(b.category,"pl")||a.employee.localeCompare(b.employee,"pl")); const {y,m}=getMonthParts(); $("#summaryMonthLabel").textContent=`${polishMonth[m-1]} ${y}`;
  $("#summaryTable tbody").innerHTML=ts.map(t=>`<tr><td><b>${escapeHtml(t.employee)}</b></td><td>${escapeHtml(t.category)}</td><td><b>${minutesToText(t.work)}</b></td><td>${minutesToText(t.ot50)}</td><td>${minutesToText(t.ot100)}</td><td>${[...t.abs.entries()].map(([k,v])=>`${k} × ${v}`).join(", ")||"—"}</td><td>${t.days}</td></tr>`).join("");
  const cats=CATEGORIES.filter(c=>c!=="NIEPRZYPISANY"||ts.some(t=>t.category===c)); $("#categoryCards").innerHTML=cats.map(c=>{ const arr=ts.filter(t=>t.category===c); const w=arr.reduce((s,x)=>s+x.work,0), f=arr.reduce((s,x)=>s+x.ot50,0), h=arr.reduce((s,x)=>s+x.ot100,0); return `<div class="cat-card"><div class="name">${escapeHtml(c)}</div><div class="hours">${minutesToText(w)}</div><div class="sub">50%: ${minutesToText(f)||"0:00"} · 100%: ${minutesToText(h)||"0:00"}</div></div>`; }).join("");
}
function renderEmployees(){
  $("#employeesTable tbody").innerHTML=employees.map((e,i)=>`<tr data-i="${i}"><td><input class="emp-active" type="checkbox" ${e.active?"checked":""}></td><td class="emp-name">${escapeHtml(e.name)}</td><td><select class="cat-select">${CATEGORIES.map(c=>`<option ${c===e.category?"selected":""}>${escapeHtml(c)}</option>`).join("")}</select></td><td><select class="mode-select"><option value="prodio" ${e.mode==="prodio"?"selected":""}>Prodio</option><option value="manual" ${e.mode==="manual"?"selected":""}>Ręcznie</option></select></td><td><select class="work-round"><option value="15" ${Number(e.workRound)===15?"selected":""}>15 min</option><option value="0" ${!Number(e.workRound)?"selected":""}>bez zaokr.</option></select></td><td><select class="edge-round"><option value="0" ${!Number(e.edgeRound)?"selected":""}>bez zaokr.</option><option value="30" ${Number(e.edgeRound)===30?"selected":""}>w górę do 30 min</option></select></td></tr>`).join("");
}
function renderAll(){ renderStats(); renderFilters(); renderRecords(); renderSummary(); renderEmployees(); }

function updateRowFromTr(tr){
  const r=state.rows.find(x=>x.id===tr.dataset.id); if(!r)return; r.start=textToMinutes(tr.querySelector(".start-input").value); r.stop=textToMinutes(tr.querySelector(".stop-input").value); r.absence=tr.querySelector(".absence-select").value; r.edited=true; r.source="edit"; recalcRow(r); saveAll(); renderRecords(); renderSummary(); renderStats();
}
function addManualRow(){
  const emp=$("#filterEmployee").value; const cat=$("#filterCategory").value; let target=emp!=="ALL"?employeeByName(emp):employees.find(e=>e.active&&(cat==="ALL"||e.category===cat)); if(!target){setStatus("Najpierw wybierz pracownika.","warn");return;}
  $("#filterEmployee").value=target.name; $("#filterRows").value="all"; renderRecords(); switchTab("records");
}
function switchTab(name){ $$(".tab").forEach(x=>x.classList.toggle("active",x.dataset.tab===name)); $$(".tab-panel").forEach(x=>x.classList.toggle("active",x.id===`tab-${name}`)); if(name==="summary")renderSummary(); }

async function exportExcel(){
  if(typeof ExcelJS==="undefined"){ setStatus("Nie można załadować generatora ExcelJS.","error"); return; }
  const wb=new ExcelJS.Workbook(); wb.creator="AGRO Godziny"; wb.created=new Date();
  const green="1F6F45", pale="E9F3ED", line="D9E2DC", white="FFFFFF", ink="15221B";
  const styleHeader=row=>{row.font={bold:true,color:{argb:white}};row.fill={type:"pattern",pattern:"solid",fgColor:{argb:green}};row.alignment={vertical:"middle"};row.height=22;};
  const setBorders=ws=>{ws.eachRow(row=>row.eachCell(cell=>cell.border={bottom:{style:"hair",color:{argb:line}}}));};
  const {y,m}=getMonthParts(); const monthLabel=`${polishMonth[m-1]} ${y}`;
  const ts=totals();

  let ws=wb.addWorksheet("PODSUMOWANIE GODZIN",{views:[{state:"frozen",ySplit:4}]});
  ws.mergeCells("A1:G1"); ws.getCell("A1").value=`AGRO – PODSUMOWANIE GODZIN · ${monthLabel.toUpperCase()}`; ws.getCell("A1").font={bold:true,size:16,color:{argb:white}}; ws.getCell("A1").fill={type:"pattern",pattern:"solid",fgColor:{argb:green}}; ws.getCell("A1").alignment={vertical:"middle"}; ws.getRow(1).height=32;
  ws.addRow([]); ws.addRow(["Spółka / dział","Godziny","50%","100%","Pracownicy z pracą"]); styleHeader(ws.getRow(3));
  for(const c of CATEGORIES){ const arr=ts.filter(t=>t.category===c); if(!arr.length)continue; ws.addRow([c,arr.reduce((s,x)=>s+x.work,0)/1440,arr.reduce((s,x)=>s+x.ot50,0)/1440,arr.reduce((s,x)=>s+x.ot100,0)/1440,arr.filter(x=>x.days).length]); }
  ws.addRow([]); ws.addRow(["Pracownik","Spółka / dział","Godziny","50%","100%","Nieobecności","Dni z pracą"]); styleHeader(ws.lastRow);
  for(const t of ts) ws.addRow([t.employee,t.category,t.work/1440,t.ot50/1440,t.ot100/1440,[...t.abs.entries()].map(([k,v])=>`${k} × ${v}`).join(", "),t.days]);
  [29,29,13,13,13,26,14].forEach((w,i)=>ws.getColumn(i+1).width=w); [2,3,4].forEach(c=>ws.getColumn(c).numFmt="[h]:mm"); setBorders(ws);

  ws=wb.addWorksheet("EWIDENCJA MIESIĄCA",{views:[{state:"frozen",ySplit:1}]});
  ws.addRow(["Data","Dzień","Pracownik","Spółka / dział","Start","Stop","Przepracowano","50%","100%","Nieobecność","Źródło","Status"]); styleHeader(ws.getRow(1));
  const used=state.rows.filter(r=>r.start!==null||r.stop!==null||r.absence).sort((a,b)=>a.date.localeCompare(b.date)||a.employee.localeCompare(b.employee,"pl"));
  for(const r of used){ const st=statusForRow(r), src=r.edited?"Korekta":r.source==="prodio"?"Prodio":"Ręcznie"; const d=localDateFromKey(r.date); ws.addRow([d,dayNames[d.getDay()],r.employee,r.category,r.start===null?null:r.start/1440,r.stop===null?null:r.stop/1440,r.work===null?null:r.work/1440,r.ot50===null?null:r.ot50/1440,r.ot100===null?null:r.ot100/1440,r.absence,src,st.text]); }
  ws.getColumn(1).numFmt="dd.mm.yyyy"; [5,6].forEach(c=>ws.getColumn(c).numFmt="hh:mm"); [7,8,9].forEach(c=>ws.getColumn(c).numFmt="[h]:mm"); ws.columns.forEach((c,i)=>c.width=[13,14,28,28,10,10,14,11,11,15,12,18][i]); ws.autoFilter={from:"A1",to:"L1"}; setBorders(ws);

  ws=wb.addWorksheet("NIEOBECNOŚCI"); ws.addRow(["Data","Pracownik","Spółka / dział","Kod","Opis"]); styleHeader(ws.getRow(1));
  for(const r of state.rows.filter(x=>x.absence)){ const code=ABSENCE_CODES.find(x=>x.code===r.absence); ws.addRow([localDateFromKey(r.date),r.employee,r.category,r.absence,code?.label||""]); }
  ws.getColumn(1).numFmt="dd.mm.yyyy"; ws.columns.forEach((c,i)=>c.width=[13,28,28,12,44][i]); setBorders(ws);

  ws=wb.addWorksheet("INFO"); ws.addRows([["AGRO Godziny"],["Miesiąc",monthLabel],["Źródło",state.sourceName||"wklejone dane"],["Rekordy wejściowe",rawCount],["Wygenerowano",new Date()],["Zasada Prodio","najwcześniejszy Start + najpóźniejszy Stop pracownika w dniu"],["Nadgodziny 50%","dni inne niż sobota; nadwyżka ponad 8 h"],["Nadgodziny 100%",state.sunday100?"sobota i niedziela – cały czas":"sobota – cały czas"]]); ws.getColumn(1).width=24;ws.getColumn(2).width=65;

  const buf=await wb.xlsx.writeBuffer(); const blob=new Blob([buf],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}); const a=document.createElement("a"); a.href=URL.createObjectURL(blob); a.download=`AGRO_GODZINY_${state.month}.xlsx`; a.click(); setTimeout(()=>URL.revokeObjectURL(a.href),1000);
}

function bind(){
  $$(".tab").forEach(b=>b.addEventListener("click",()=>switchTab(b.dataset.tab)));
  $("#monthInput").value=state.month; $("#sunday100").checked=!!state.sunday100; $("#autoUnknown").checked=state.autoUnknown!==false;
  $("#monthInput").addEventListener("change",()=>{
    state.month=$("#monthInput").value;
    if(currentRecords.length) processRecords(currentRecords,state.sourceName||"wczytane dane");
    else syncRowsWithEmployees();
  });
  $("#sunday100").addEventListener("change",()=>{state.sunday100=$("#sunday100").checked;state.rows.forEach(recalcRow);saveAll();renderAll();});
  $("#autoUnknown").addEventListener("change",()=>{state.autoUnknown=$("#autoUnknown").checked;saveAll();});
  $("#filterCategory").addEventListener("change",()=>{renderFilters();renderRecords();});
  $("#filterEmployee").addEventListener("change",renderRecords);
  $("#filterRows").addEventListener("change",renderRecords);
  $("#recordsTable tbody").addEventListener("change",e=>{const tr=e.target.closest("tr[data-id]");if(tr)updateRowFromTr(tr);});
  $("#addManual").addEventListener("click",addManualRow);
  $("#exportTop").addEventListener("click",exportExcel); $("#exportSummary").addEventListener("click",exportExcel);
  $("#processPaste").addEventListener("click",()=>{try{processRecords(parseDelimited($("#pasteInput").value),"wklejone dane");}catch(e){setStatus(e.message,"error");}});
  $("#clearMonth").addEventListener("click",()=>{state.rows=makeBlankRows();rawCount=0;saveAll();renderAll();setStatus("Wyczyszczono ewidencję wybranego miesiąca.");});
  $("#fileInput").addEventListener("change",async e=>{const f=e.target.files[0];if(!f)return;await handleFile(f);});
  const dz=$("#dropzone"); ["dragenter","dragover"].forEach(ev=>dz.addEventListener(ev,e=>{e.preventDefault();dz.classList.add("drag");})); ["dragleave","drop"].forEach(ev=>dz.addEventListener(ev,e=>{e.preventDefault();dz.classList.remove("drag");})); dz.addEventListener("drop",async e=>{const f=e.dataTransfer.files[0];if(f)await handleFile(f);});
  $("#employeesTable tbody").addEventListener("change",e=>{const tr=e.target.closest("tr[data-i]");if(!tr)return;const emp=employees[Number(tr.dataset.i)];emp.active=tr.querySelector(".emp-active").checked;emp.category=tr.querySelector(".cat-select").value;emp.mode=tr.querySelector(".mode-select").value;emp.workRound=Number(tr.querySelector(".work-round").value);emp.edgeRound=Number(tr.querySelector(".edge-round").value);syncRowsWithEmployees();});
  $("#resetEmployees").addEventListener("click",()=>{employees=cloneDefaultEmployees();saveAll();syncRowsWithEmployees();setStatus("Przywrócono konfigurację pracowników z pliku wzorcowego.");});
}
async function handleFile(f){
  try{
    $("#fileName").textContent=f.name;setStatus(`Czytam ${f.name}…`);
    const parsed=await rowsFromFile(f);
    processRecords(parsed.records,f.name);
    if(parsed.meta?.prodioSheet){
      const extra=parsed.meta.referenceSheet?` · pracownicy: „${parsed.meta.referenceSheet}” (${parsed.meta.employees})`:"";
      setStatus(`${$("#statusBox").textContent} Arkusz Prodio: „${parsed.meta.prodioSheet}”${extra}.`,$("#statusBox").classList.contains("warn")?"warn":"ok");
    }
  }catch(e){console.error(e);setStatus(e.message||"Nie udało się wczytać pliku.","error");}
}

document.addEventListener("DOMContentLoaded",()=>{bind();ensureRows();renderAll();});
