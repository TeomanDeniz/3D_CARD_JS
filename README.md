# 3D Card Effect

## Overview
This project creates a 3D interactive card effect using HTML, CSS, and JavaScript. The effect includes realistic shadows, shine, and perspective transforms that respond to mouse and touch interactions.

## Features
- Smooth 3D transformations
- Responsive design
- Supports mouse and touch interactions
- Multiple layers with depth effects
- Shadows and shine for enhanced realism

## File Structure
- `3D_CARD.css` - Contains all styles for the 3D card effect.
- `3D_CARD.js` - Handles interaction logic for the 3D card.

## Usage

### 1. Include the CSS and JS Files
```html
<link rel="stylesheet" href="3D_CARD.css">
<script src="3D_CARD.js" defer></script>
```

### 2. Add a 3D Card to Your HTML
```html
<div class="_3D_CARD">
 <div data-layer data-img="https://raw.githubusercontent.com/TeomanDeniz/TeomanDeniz/refs/heads/main/images/repo_projects/3dcard/dbg.jpg"></DIV>
 <div data-layer>Test</DIV>
</div>
```

### 3. Initialize the Effect
Call the function in your JavaScript:
```js
_3D_CARD();
```

### Example HTML:
```html
<!DOCTYPE HTML>
<HTML LANG="EN">
 <HEAD>
  <META charset="UTF-8"/>
  <LINK REL="stylesheet" HREF="3D_CARD.css"/>
  <STYLE>
BODY
{
  BACKGROUND: #99AEFF;
}

.CONTAINER
{
                TOP: 50%;
               LEFT: 50%;
              WIDTH: 704PX;
             HEIGHT: 460PX;
           POSITION: ABSOLUTE;

  -WEBKIT-TRANSFORM: TRANSLATE(-50%, -50%);
      -MS-TRANSFORM: TRANSLATE(-50%, -50%);
          TRANSFORM: TRANSLATE(-50%, -50%);
}

._3D_CARD
{
          WIDTH: 320PX;
         MARGIN: 15PX;
         HEIGHT: 200PX;
  BORDER-RADIUS: 8PX;
}
  </STYLE>
 </HEAD>
 <BODY>
  <DIV CLASS="CONTAINER">
   <DIV CLASS="_3D_CARD">
    <DIV DATA-LAYER DATA-IMG="https://raw.githubusercontent.com/TeomanDeniz/TeomanDeniz/refs/heads/main/images/repo_projects/3dcard/abg.jpg"></DIV>
    <DIV DATA-LAYER DATA-SIZE="CONTAIN" DATA-IMG="https://raw.githubusercontent.com/TeomanDeniz/TeomanDeniz/refs/heads/main/images/repo_projects/3dcard/afg.png"></DIV>
   </DIV>
   <DIV CLASS="_3D_CARD">
    <DIV DATA-LAYER DATA-IMG="https://raw.githubusercontent.com/TeomanDeniz/TeomanDeniz/refs/heads/main/images/repo_projects/3dcard/bbg.jpg"></DIV>
    <DIV DATA-LAYER DATA-IMG="https://raw.githubusercontent.com/TeomanDeniz/TeomanDeniz/refs/heads/main/images/repo_projects/3dcard/fg.png"></DIV>
   </DIV>
   <DIV CLASS="_3D_CARD">
    <DIV DATA-LAYER DATA-IMG="https://raw.githubusercontent.com/TeomanDeniz/TeomanDeniz/refs/heads/main/images/repo_projects/3dcard/cbg.jpg"></DIV>
    <DIV DATA-LAYER DATA-IMG="https://raw.githubusercontent.com/TeomanDeniz/TeomanDeniz/refs/heads/main/images/repo_projects/3dcard/fg.png"></DIV>
   </DIV>
   <DIV CLASS="_3D_CARD">
    <DIV DATA-LAYER DATA-IMG="https://raw.githubusercontent.com/TeomanDeniz/TeomanDeniz/refs/heads/main/images/repo_projects/3dcard/dbg.jpg"></DIV>
    <DIV DATA-LAYER DATA-IMG="https://raw.githubusercontent.com/TeomanDeniz/TeomanDeniz/refs/heads/main/images/repo_projects/3dcard/fg.png"></DIV>
   </DIV>
  </DIV>
  <SCRIPT TYPE="TEXT/JAVASCRIPT" SRC="3D_CARD.js"></SCRIPT>
  <SCRIPT TYPE="TEXT/JAVASCRIPT">
_3D_CARD();
  </SCRIPT>
 </BODY>
</HTML>
```

## Customization
- Modify the CSS variables for different effects.
- Adjust the JavaScript function for more responsiveness.
- Add more layers by using `data-layer` attributes.

## Browser Compatibility
- Chrome ✅
- Firefox ✅
- Edge ✅
- Safari ✅

## License
This project is open-source and available under the MIT License.
