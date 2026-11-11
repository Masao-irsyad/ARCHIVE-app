// ARCHIVE Discover: public RSS aggregation, no API key required.
// Google News RSS is a discovery service, not a source of verified competition deadlines.
const topics = [
  ['Projects','architecture new building design project'],
  ['Sustainability','sustainable architecture passive design building'],
  ['Technology','architecture construction technology BIM 3D printing'],
  ['Industry','architecture profession urban planning industry']
];
function decodeEntities(str=''){
  return str.replace(/&#(x[0-9a-f]+|\d+);/gi,(_,n)=>{let v=n[0].toLowerCase()==='x'?parseInt(n.slice(1),16):parseInt(n,10);return v>0&&v<=0x10ffff?String.fromCodePoint(v):''})
    .replace(/&(amp|lt|gt|quot|apos|nbsp);/g,(_,n)=>({amp:'&',lt:'<',gt:'>',quot:'"',apos:"'",nbsp:' '}[n]));
}
function tag(xml,name){const m=xml.match(new RegExp('<'+name+'(?:\\s[^>]*)?>([\\s\\S]*?)<\\/'+name+'>','i'));return m?decodeEntities(m[1].replace(/^<!\[CDATA\[|\]\]>$/g,'').trim()):''}
function plain(s){return s.replace(/<[^>]*>/g,' ').replace(/\s+/g,' ').trim()}
function findImage(item){
  const m=item.match(/<(?:media:content|media:thumbnail|enclosure)\b[^>]*\burl=["']([^"']+)["'][^>]*>/i);
  if(m&&/^https:\/\//i.test(decodeEntities(m[1])))return decodeEntities(m[1]);
  const d=tag(item,'description');const im=d.match(/<img\b[^>]*\bsrc=["'](https:\/\/[^"']+)["']/i);
  return im?decodeEntities(im[1]):null;
}
function parse(xml,category){return [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].slice(0,12).map(([,item])=>{
 const title=plain(tag(item,'title'));const url=tag(item,'link');const pub=tag(item,'pubDate');const source=plain(tag(item,'source'))||'Google News RSS';
 return {title,url,source,category,date:pub?new Date(pub).toISOString().slice(0,10):'',summary:'',image:findImage(item)};
 }).filter(x=>x.title&&/^https:\/\//.test(x.url));}
async function fetchFeed(q,category){const endpoint='https://news.google.com/rss/search?q='+encodeURIComponent(q+' when:30d')+'&hl=en-US&gl=US&ceid=US:en';const r=await fetch(endpoint,{headers:{'User-Agent':'ARCHIVE-Discover/0.4 (RSS reader)'}});if(!r.ok)throw Error('RSS HTTP '+r.status);return parse(await r.text(),category)}
exports.handler=async()=>{
 try{
 const all=await Promise.allSettled([...topics.map(([c,q])=>fetchFeed(q,c)),fetchFeed('architecture student design competition call for entries','Competition')]);
 const news=all.slice(0,4).flatMap(x=>x.status==='fulfilled'?x.value:[]);
 const competitions=all[4].status==='fulfilled'?all[4].value:[];
 const unique=a=>[...new Map(a.map(x=>[x.url,x])).values()].slice(0,32);
 if(!news.length&&!competitions.length)return {statusCode:503,headers:{'Content-Type':'application/json','Cache-Control':'no-store'},body:JSON.stringify({error:'News feeds unavailable'})};
 return {statusCode:200,headers:{'Content-Type':'application/json; charset=utf-8','Cache-Control':'public, max-age=300'},body:JSON.stringify({news:unique(news),competitions:unique(competitions).slice(0,8),updatedAt:new Date().toISOString()})};
 }catch(e){return {statusCode:503,headers:{'Content-Type':'application/json'},body:JSON.stringify({error:'RSS unavailable'})}}
};
