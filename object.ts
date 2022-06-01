interface Obj1{
    name: string;
    id: number;
    age: number;
}

interface Anime{
    title: string;
    chapter: number;
    term: number;
};

const a: Anime = {title: "Naruto",chapter: 200,term: 10};

interface Users{
    id: number;
    account_id: string;
    nickname: string;
    follower: number[];
    bio: string;
};

const getUsers : Users[] =[
    {
        id:10,
        account_id:"a",
        nickname: "b",
        follower:[2,4,5],
        bio:"ddddddddd",
    },
    {
        id:13,
        account_id:"a",
        nickname: "b",
        follower:[2,4,541,441,2,10],
        bio:"ddddddddd",
    }
];