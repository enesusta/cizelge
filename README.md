# cizelge

## Install

cizelge uses *chart.js* as peerDependency, so you have to install chart.js with cizelge.

```bash
npm i cizelge chart.js
```

### All Charts

#### LineChart Example

```jsx
import React, {useState, useEffect} from "react";
import {LineChart} from "cizelge";

const Cizelge = () => {
    const [x, setX] = useState(null);
    const [y, setY] = useState(null);

    useEffect(() => {

        const response = fetch('https://raw.githubusercontent.com/enesusta/assets-host-for-github-pages/assets/cizelge/ZonAnn.Ts%2BdSST.csv');
        response
            .then(res => res.text())
            .then(res => {
                const table = res.split('\n').slice(1);
                const x1 = [];
                const y1 = [];
                table.forEach(row => {
                    const columns = row.split(',');
                    const year = columns[0];
                    const temp = columns[1];
                    x1.push(year);
                    y1.push(temp);
                });
                setX(x1);
                setY(y1);
            });

    }, []);

    return (
        <div>
            <LineChart xAxis={x} yAxis={y} sourceName='Cizelge' />
        </div>
    );
};

export default Cizelge;
```


<img src="https://raw.githubusercontent.com/enesusta/assets-host-for-github-pages/assets/cizelge/cizelge-line-chart.svg" height=340>

The above picture helps to understand how to right use of props that LineChart has.



## License

MIT © [Enes Usta](https://github.com/enesusta)
