export function zoom() {
  var doc = document.getElementById('overworld');
  console.log(doc);
  if (doc && doc !== null) {
    var scale = 1,
      panning = false,
      xoff = 0,
      yoff = 0,
      start = { x: 0, y: 0 },
      doc = document.getElementById('document');

    doc!.onmousedown = function (e) {
      e.preventDefault();
      start = { x: e.clientX - xoff, y: e.clientY - yoff };
      panning = true;
    };

    doc!.onmouseup = function (e) {
      panning = false;
    };

    doc!.onmousemove = function (e) {
      e.preventDefault();
      if (!panning) {
        return;
      }
      xoff = e.clientX - start.x;
      yoff = e.clientY - start.y;
      setTransform(doc, xoff, yoff, scale);
    };

    doc!.onwheel = function (e) {
      e.preventDefault();
      // take the scale into account with the offset
      var xs = (e.clientX - xoff) / scale,
        ys = (e.clientY - yoff) / scale,
        delta = -e.deltaY;

      // get scroll direction & set zoom level
      delta > 0 ? (scale *= 1.2) : (scale /= 1.2);

      // reverse the offset amount with the new scale
      xoff = e.clientX - xs * scale;
      yoff = e.clientY - ys * scale;

      setTransform(doc, xoff, yoff, scale);
    };
  }
}

function setTransform(doc: any, xoff: number, yoff: number, scale: number) {
  doc.style.transform =
    'translate(' + xoff + 'px, ' + yoff + 'px) scale(' + scale + ')';
}
