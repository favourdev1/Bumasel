/** @format */
import React, { useState } from 'react';
import { Range, getTrackBackground } from 'react-range';

const MultiRangeSlider = () => {
  const [values, setValues] = useState([20, 80]); // Set initial values further apart
  const MIN = 0;
  const MAX = 100;

  return (
    <div className="w-full border rounded-lg bg-white mb-3 px-2 py-4">
      <div className="flex items-center justify-between border-b pb-3">
        <p className="w-full text-left flex items-center font-semibold justify-between">
          Price range
        </p>
        <p className="text-primary font-bold cursor-pointer" id="applyPricing">
          Apply
        </p>
      </div>
      <Range
        values={values}
        step={1}
        min={MIN}
        max={MAX}
        onChange={(values) => setValues(values)}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '36px',
              display: 'flex',
              width: '100%',
            }}
          >
            <div
              ref={props.ref}
              style={{
                height: '5px',
                width: '100%',
                borderRadius: '4px',
                background: getTrackBackground({
                  values,
                  colors: ['#ccc', '#548BF4', '#ccc'],
                  min: MIN,
                  max: MAX,
                }),
                alignSelf: 'center',
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ index, props, isDragged }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '24px',
              width: '24px',
              borderRadius: '50%',
              backgroundColor: '#FFF',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: '0px 2px 6px #AAA',
            }}
          >
            <div
              style={{
                height: '16px',
                width: '5px',
                backgroundColor: isDragged ? '#548BF4' : '#CCC',
              }}
            />
          </div>
        )}
      />
      <div className="mt-4 text-xs">
        <span>Min: {values[0]}</span> - <span>Max: {values[1]}</span>
      </div>
    </div>
  );
};

export default MultiRangeSlider;