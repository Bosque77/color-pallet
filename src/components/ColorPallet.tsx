import React from "react";
import { color_pallet } from "./color_pallet_dict";

const ColorPallet = () => {
  const addColorPallets = () => {
    const pallets = color_pallet.map((pallet, key) => {
      const pallet_name = pallet.name;
      const colors = pallet.colors;
      return (
        <div className="color-pallet" key={key}>
          <h3>{pallet_name}</h3>
          {insertPallet(pallet_name, colors)}
        </div>
      );
    });
    return pallets;
  };

  const insertPallet = (_pallet_name:string, colors: string[]) => {
    const html_code = colors.map((color, key) => (
      <div
      className="color-swatch inline-block w-16 h-16 rounded-lg p-8 m-2"
        style={{ backgroundColor: color }}
        key={key}
      />
    ));
    return html_code;
  };

  return <div>{addColorPallets()}</div>;
};

export default ColorPallet;
