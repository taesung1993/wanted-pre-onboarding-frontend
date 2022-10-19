interface Loading {
  status: "loading";
  data: null;
}

interface Success<T> {
  status: "success";
  data: T;
}

interface Error {
  status: "error";
  data: string;
}

export type AsyncData<T> = Loading | Success<T> | Error;
