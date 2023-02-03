import "../styles/globals.css";
import type { AppProps } from "next/app";

import { Provider, atom, createStore } from "jotai";

const myStore = createStore();

const nameAtom = atom("dhruv");
const valueAtom = atom(1);

const upperCaseNameAtom = atom((get) => get(nameAtom).toUpperCase());

const update = "agarwal";

const writeUserNameAtom = atom(null, (get, set, update) => {
  set(nameAtom, get(nameAtom) + update);
});

const newValue = 2;

const readWriteAtom = atom(
  (get) => get(valueAtom),
  (get, set, newValue) => set(valueAtom, get(valueAtom) + newValue)
);

export { nameAtom, valueAtom, upperCaseNameAtom };

// provider is just like context to pass on the values wherever you want
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={myStore}>
      <Component {...pageProps} />
    </Provider>
  );
}
