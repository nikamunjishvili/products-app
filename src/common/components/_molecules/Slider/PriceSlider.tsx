import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import "./priceSlider.css";
import { useState } from "react";

interface PriceRange {
  min: number;
  max: number;
}

interface Props {
  setPriceRange: (range: PriceRange) => void;
  filterProducts: () => void;
}

const PricesSlider: React.FC<Props> = ({ setPriceRange, filterProducts }) => {
  const [value, setValue] = useState<number[]>([2, 10]);

  const rangeSelector = (_event: React.ChangeEvent<{}>, newValue: number | number[]) => {
    setValue(newValue as number[]);
    if (typeof newValue === 'object' && newValue.length === 2) {
      const [min, max] = newValue;
      setPriceRange({ min, max });
    }
    filterProducts(); 
  };

  const formattedValue0 = !isNaN(value[0]) ? value[0].toLocaleString() : "";
  const formattedValue1 = !isNaN(value[1]) ? value[1].toLocaleString() : "";


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
     Price: <span className="text-darkgray">{formattedValue0} - {formattedValue1}</span>
    </div>
  );
};

export default PricesSlider;