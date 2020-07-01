import styled from "styled-components";

import { BREAKPOINTS } from "../lib/constants";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  @media (min-width: ${BREAKPOINTS.SMALL_DEVICES}) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: ${BREAKPOINTS.LARGE_DEVICES}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const URL = "https://www.instagram.com";

function ImageGrid(props) {
  const { images } = props;

  return (
    <Grid>
      {images.map((item) => {
        return (
          <a
            key={item.image_code}
            href={`${URL}/p/${item.image_code}`}
            target="_blank"
            rel="noopener"
          >
            <Image src={item.image_url} />
          </a>
        );
      })}
    </Grid>
  );
}

export default ImageGrid;
