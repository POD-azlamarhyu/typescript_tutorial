const js_div_selector:HTMLDivElement | null = document.querySelector("div");

console.log(js_div_selector);

const js_div_selector_all:NodeListOf<HTMLDivElement> = document.querySelectorAll("div");

console.log(js_div_selector_all);

const js_p_1:HTMLElement  | null = document.getElementById("js-p-1");

console.log(js_p_1);

const js_p_2:HTMLElement | null = document.getElementById("js-p-2");

console.log(js_p_2);

const js_label:NodeListOf<HTMLLabelElement> = document.querySelectorAll("label");

const js_btn_1:HTMLElement  | null= document.getElementById("js-btn-1");
const btn2:HTMLElement | null = document.getElementById("js-btn-2");

const js_input_1:HTMLElement  | null= document.getElementById("js-input-1");
const colorAry:string[] = ["#FFD489","#FFB64D","#FFE543","#C3FF43","#82FF43","#43FFAA","#5FFAFF","#5FBDFF","#5F6DFF"];
const url:string = "https://weather.tsukumijima.net/api/forecast/city/";
const bg:HTMLElement | null = document.getElementById("js-submit-2");
const js_div_3:HTMLElement | null = document.getElementById("js-div-8");
const js_btn_4:HTMLElement | null = document.getElementById("js-btn-4");

interface Location{
    area: string;
    prefecture: string;
    district: string;
    city: string;
}


const randomColor = ():string =>{
    let i:number = Math.floor(Math.random()*(colorAry.length+1));
    return colorAry[i];
}
const changeBgCol = ():void => {
    bg.style.backgroundColor = randomColor();
}

const displayJsonData = async (resJson:any):Promise<void> => {
    const param1:HTMLParagraphElement = document.createElement("p");
    const param2:HTMLParagraphElement = document.createElement("p");
    const param3:HTMLParagraphElement = document.createElement("p");
    const loc:Location = resJson.location;
    const weather:any = resJson.forecasts[0].detail;
    param1.textContent = `場所 : ${loc.area+" " + loc.city+" "+loc.district}`;
    js_div_3.appendChild(param1);
    param2.textContent = `天気 : ${weather.weather}`;
    js_div_3.appendChild(param2);
    param3.textContent = `風 : ${weather.wind}`;
    js_div_3.appendChild(param3);
    console.log(loc);
    console.log(weather);
}

const displayBody = async ():Promise<void> => {
    try{
        const cityId:string = "017010";
        const res:any = await fetch(`${url}${cityId}`);
        const resJson:any =  await res.json();

        console.log(resJson);
        await displayJsonData(resJson);
    }catch(err:unknown){
        console.error(err);
    }
}
btn2.addEventListener("click",changeBgCol);
js_btn_4.addEventListener("click",displayBody);