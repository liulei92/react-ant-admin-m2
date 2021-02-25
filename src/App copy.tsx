import { Button } from "antd";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useState, useCallback, useEffect } from "react";

function App() {
  const [tableInfo, setTableInfo] = useState<any>({});
  const getMyTable = useCallback(() => {
    axios({
      url: "api/mytable", //不用引入，直接在api后面接接口
      method: "get",
      data: {},
    })
      .then((result) => {
        console.log(result);
        setTableInfo(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    getMyTable();
    return () => {
      // clearEffect
    };
  }, [getMyTable]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ul>
          {tableInfo?.banner?.map((item: any) => {
            return (
              <li key={item?.id}>
                <img src={item.imgurl} alt={item.title} />
                <p>{item.title}</p>
              </li>
            );
          })}
        </ul>

        <Button type="primary" onClick={getMyTable}>
          re get
        </Button>
      </header>
    </div>
  );
}

export default App;
