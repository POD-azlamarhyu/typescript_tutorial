interface Obj1{
    name: string;
    id: number;
    age: number;
}

interface Anime{
    title: string;
    chapter: number;
    term: number;
}

const a: Anime = {title: "Naruto",chapter: 200,term: 10};

console.log(a);