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

const js_input_1:HTMLElement  | null= document.getElementById("js-input-1");

const url:string = "https://weather.tsukumijima.net/api/forecast/city/";

const js_div_3:HTMLElement | null = document.getElementById("js-div-8");
const js_btn_4:HTMLElement | null = document.getElementById("js-btn-4");

const displayJsonData = (resJson:any) => {
    const param1:HTMLParagraphElement = document.createElement("p");
    const param2:HTMLParagraphElement = document.createElement("p");
    const loc:any = resJson.location;
    const weather:any = resJson.forecasts[0].detail;
    param1.textContent = `場所 : ${loc.area+" " + loc.city+" "+loc.district}`;
    js_div_3.appendChild(param1);
    param2.textContent = `天気 : ${weather.weather}`;
    js_div_3.appendChild(param2);
    console.log(resJson.location);
}

const displayBody = async ():Promise<void> => {
    try{
        const cityId:string = "017010";
        const res:any = await fetch(`${url}${cityId}`);
        const resJson:any =  await res.json();

        console.log(resJson);
        displayJsonData(resJson);
    }catch(err:unknown){
        console.error(err);
    }
}

js_btn_4.addEventListener("click",displayBody)