import "../styles/globals.css";

import create, { createStore } from "zustand";

import { persist } from "zustand/middleware";

let store = (set, get) => ({
  votes: 0,
  addVotes: () => set((state) => ({ votes: state.votes + 1 })),
  deductVotes: (value) => set((state) => ({ votes: state.votes - value })),
  name: "Dhruv",
  submitNewVotes: () => {
    const currentVotes = get().votes;
    // action to submit something
  },
});

// define the store
const useStore = createStore(store);

/// storing the data in local storage with name VotesForm
store = persist(store, { name: votesForm });

/// set
const inc = useStore((state) => state.addVotes);

/// get
const votes = useStore((state) => state.votes);

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
