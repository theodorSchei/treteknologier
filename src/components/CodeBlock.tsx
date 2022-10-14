import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export const CodeBlock = () => {
  return (
    <SyntaxHighlighter
      language="cpp"
      style={atomOneDark}
      customStyle={{ fontSize: '0.9rem' }}
      wrapLines={true}
      wrapLongLines={true}
      showLineNumbers={true}
    >
      {`module wireframe_square(x, y, z, thickness) {
	difference() {
		// Base cube
		cube([x, y, z], center = true);
		 // Cutting out the holes
		cube([x + thickness,
			y - thickness * 2,
			z - thickness * 2],
			center = true);
		cube([x - thickness * 2,
			y + thickness,
			z - thickness * 2],
			center = true);
		cube([x - thickness * 2,
			y - thickness * 2,
			z + thickness],
			center = true);
	}
}

wireframeThickness = 1;
boxWidth = 10;
difference() {
	union() {
		translate([0,0,15 - wireframeThickness]) {
			wireframe_square(30, boxWidth, boxWidth, wireframeThickness);
		}
		wireframe_square(boxWidth, boxWidth, 20, wireframeThickness);
	};
	translate([0,0,10.5 - wireframeThickness]) {
		cube([boxWidth - wireframeThickness * 2,
				boxWidth + wireframeThickness,
				wireframeThickness],
				center=true);
		cube([boxWidth + wireframeThickness,
				boxWidth - wireframeThickness * 2,
				wireframeThickness],
				center=true);
	}
}`}
    </SyntaxHighlighter>
  );
};
