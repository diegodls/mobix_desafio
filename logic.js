function draw(size) {
  let mid = Math.floor(size / 2);

  for (let i = 0; i < size; i++) {
    let line = "";
    let spaces = "";
    let inside = "";
    let symbol = "#"; //caso queira trocar o conteúdo
    let stroke = "#"; //caso queira trocar o contorno

    if (i == 0 || i == size - 1) {
      line = stroke.repeat(size);
    } else {
      //cima
      if (i < mid) {
        let spacesF = i - 1;
        let insideF = size - 4 - (i - 1) * 2;

        spaces = " ".repeat(spacesF);
        inside = symbol.repeat(insideF);

        line = `${stroke}${spaces}${stroke}${inside}${stroke}${spaces}${stroke}`;
      }

      //meio, caso for impar
      if (i == mid && size % 2 == 1) {
        let spacesF = i - 1;
        let insideF = size - 4 - (i - 2) * 2;

        spaces = " ".repeat(spacesF);
        inside = " ".repeat(insideF);

        line = `${stroke}${spaces}${stroke}${spaces}${stroke}`;
      }

      //baixo
      if (size % 2 == 0 ? i >= mid : i > mid) {
        let spacesF = size % 2 == 0 ? size - i - 2 : size - i - 2;

        let insideF =
          size % 2 == 0
            ? size - 4 - (size - i - 2) * 2
            : size - 4 - (size - i - 2) * 2;

        spaces = " ".repeat(spacesF);
        inside = " ".repeat(insideF);

        line = `${stroke}${spaces}${stroke}${inside}${stroke}${spaces}${stroke}`;
      }
    }

    console.log(`${line}`);
  }
}

draw(20);
