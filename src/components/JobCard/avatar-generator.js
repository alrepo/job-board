function generateAvatar(username, size) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = size;
    canvas.height = size;
    context.fillStyle = '#FFFFFF'; // Background color
    context.fillRect(0, 0, size, size);
    context.font = Math.floor(size / 2) + 'px Arial'; // Font size
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillStyle = '#FF0000'; // Text color
    context.fillText(username.charAt(0).toUpperCase(), size / 2, size / 2);
    // Draw a circle
    context.beginPath();
    context.arc(size / 2, size / 2, size / 2, 0, 2 * Math.PI);
    return canvas.toDataURL();
  }
  
  export { generateAvatar };
  