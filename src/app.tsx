import { useCrud } from "./hooks/use-crud";
import { useEffect } from "react";
import { useFetchData } from "./hooks/use-fetch-data";
import { GifForm } from "./components/molecules/gif-form";
import { GifList } from "./components/organism/gif-list";
import "./app.scss";

const App = () => {

  const { get } = useCrud()
  const { data, fetchData } = useFetchData()

  useEffect(() => {
    fetchData(get())
  }, [get, fetchData])

  const refetch = () => {
    fetchData(get())
  }

  return (
    <div className="app">
      <h1 className="app__title">Gif Gallery</h1>
      <GifForm onSave={refetch} />
      <GifList gifList={data} onDelete={refetch} /> 
    </div >
  );
};

export default App;
