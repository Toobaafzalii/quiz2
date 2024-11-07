interface Ipost {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: {
    likes: number;
    dislikes: number;
  };
  views: number;
  userId: number;
}

interface Iresponse {
  skip: number;
  limit: number;
  total: number;
}

interface fetchPostResponse extends Iresponse {
  posts: Ipost[];
}

interface Ipagination {
  skip: number;
  limit: number;
}

type fetchPostListType = (_: Ipagination) => Promise<fetchPostResponse>;

interface Iuser {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: {
    color: string;
    type: string;
  };
  ip: string;
  address: {
    address: string;
    city: string;
    state: string;
    stateCode: string;
    postalCode: string;
    coordinates: {
      lat: number;
      lng: number;
    };
    country: string;
  };
}

type fetchUsersListTypeById = (_: number[]) => Promise<Iuser[]>;
type fetchUsersListType = () => Promise<Iuser[]>;

interface IfetchUsersByIdResponse extends Iresponse {
  users: Iuser[];
}

interface IpostCardProps {
  user: Iuser;
  post: Ipost;
  extendBody?: boolean;
}

interface IDataState {
  user: Iuser[];
  post: Ipost[];
}

type fetchPostCommentsType = (id: number) => Promise<Iuser>;

interface Icomment {
  id: number;
  body: string;
  postId: number;
  likes: number;
  user: {
    id: number;
    username: string;
    fullName: string;
  };
}

interface IfetchCommentResponse extends Iresponse {
  comments: Icomment[];
}
