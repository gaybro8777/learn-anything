/** @jsx jsx */
import { jsx, useColorMode, Styled } from "theme-ui";
import Button from "./Button";
import { FunctionComponent } from "react";

const modes = ["dark", "dusk", "light"];

const Header: FunctionComponent = () => {
  const [mode, setMode] = useColorMode();

  const handleThemeChange = () => {
    const index = modes.indexOf(mode);
    const next = modes[(index + 1) % modes.length];
    setMode(next);
  };

  return (
    <header
      sx={{
        display: 'grid',
        gridGap: 3,
        // maxWidth: 768,
        mx: 'auto',
        px: 3,
        py: 3,
        gridAutoFlow: 'row',
        gridTemplateColumns: [
          'repeat(2, 1fr)',
          'repeat(3, 1fr)',
        ],
      }}
    >
      <div
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gridColumnStart: [ 1, 2 ],
          gridColumnEnd: [ 3, 3 ],
          order: [ 0, 1 ],
        }}
      >
        <Styled.a href="/">
          <svg
            sx={{
              width: "33px",
              height: "62px",
              color: "inherit",
              fill: "currentColor"
            }}
            viewBox="0 0 33 62"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.5 33.9971V51.9971C8.5 54.0681 10.179 55.7471 12.25 55.7471C14.3211 55.7471 16 54.0681 16 51.9971V33.9971H17V57.4971C17 59.5681 18.679 61.2471 20.75 61.2471C22.8211 61.2471 24.5 59.5681 24.5 57.4971V33.9971H25.5V43.9971C25.5 46.0681 27.179 47.7471 29.25 47.7471C31.3211 47.7471 33 46.0681 33 43.9971V15.4971C33 6.38434 25.6127 0 16.5 0C7.38727 0 0 6.3844 0 15.4971V46.9971C0 49.0681 1.67896 50.7471 3.75 50.7471C5.82111 50.7471 7.5 49.0681 7.5 46.9971V33.9971H8.5ZM10.5 15.497C10.5 16.4636 9.71649 17.247 8.75 17.247C7.78351 17.247 7 16.4636 7 15.497C7 14.5305 7.78351 13.747 8.75 13.747C9.71649 13.747 10.5 14.5305 10.5 15.497ZM24.25 17.247C25.2165 17.247 26 16.4635 26 15.497C26 14.5305 25.2165 13.747 24.25 13.747C23.2835 13.747 22.5 14.5305 22.5 15.497C22.5 16.4635 23.2835 17.247 24.25 17.247ZM12 21.497C12 21.497 12 24.997 16.5 24.997C21 24.997 21 21.497 21 21.497H12Z"
            />
          </svg>
        </Styled.a>
      </div>
      <div
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          order: 2
        }}
      >
        <Styled.a
          href="/guide/new"
          sx={{
            appearance: "none",
            fontFamily: "inherit",
            fontSize: 1,
            m: 0,
            px: 2,
            py: 2,
            color: "currentColor",
            bg: "muted",
            border: 0,
            borderRadius: 2,
            ":focus": {
              outline: "2px solid"
            }
          }}
        >
          New Guide
        </Styled.a>
        <Button sx={{ ml: 2 }} onClick={handleThemeChange}>
          {mode}
        </Button>
      </div>
    </header>
  );
};

export default Header;
