import { useState } from "react";
import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ComicsInfo from "../comicsList/ComicsList";

import ErrorBoundary from "../errorBoundary/ErrorBoundary";

import decoration from "../../resources/img/vision.png";
import ComicsList from "../comicsList/ComicsList";

const App = () => {
  const [charId, setCharId] = useState(0);

  const onCharSelected = (id) => setCharId(id);

  return (
    <div className="app">
      <AppHeader />
      <main>
        <ErrorBoundary>
          <ComicsList />
        </ErrorBoundary>
        {/* <ErrorBoundary>
          <RandomChar />
        </ErrorBoundary>
        <div className="char__content">
          <ErrorBoundary>
            <CharList onCharSelected={onCharSelected} />
          </ErrorBoundary>
          <ErrorBoundary>
            <CharInfo charId={charId} />
          </ErrorBoundary>
        </div> */}
        <img className="bg-decoration" src={decoration} alt="vision" />
      </main>
    </div>
  );
};
export default App;
