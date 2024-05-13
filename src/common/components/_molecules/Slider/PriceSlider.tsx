import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import "./PriceSlider.css";
import { useState } from "react";

function PricesSlider ({ setPriceRange, filterProducts }: any)  {
  const [value, setValue] = useState([2, 10]);

  const rangeSelector = (newValue: any) => {
    setValue(newValue);
    setPriceRange({ min: newValue[0], max: newValue[1] });
    filterProducts(); 
  };

  const formattedValue0 = value[0].toLocaleString();
  const formattedValue1 = value[1].toLocaleString();

  return (
    <div
      style={{
        display: "block",
        width: "312px",
      }}
    >
      <Typography id="range-slider" gutterBottom>
        <span className="Title">Price:</span>
      </Typography>
      <Slider
        value={value}
        onChange={rangeSelector}
        valueLabelDisplay="auto"
        min={0}
        max={1500}
      />
     Price: <span className="Title-2">{formattedValue0} - {formattedValue1}</span>
    </div>
  );
};

export default PricesSlider;