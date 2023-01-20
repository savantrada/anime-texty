# **Description**
- This package provides many ways to animate your text. Please chackout the documentation.

# Install
`$ npm install anime-texty`

# **Types of animations**
- **Fade In**: Make the text fade in.
- **Slide In**: A function that animates the text sliding in from the left or right side of the screen.
- **Flip**: A function that animates the text flipping over like a card.
- **Zoom In**: A function that animates the text scaling up from a smaller size to its normal size.
- **Spin**: A function that animates the text spinning around.
- **Bounce**: A function that animates the text bouncing up and down.
- **Wiggle**: A function that animates the text wiggling back and forth.
- **Typing**: A function that animates the text as if it is being typed out.
- **Jumble**: A function that animates the text as if it is being jumbled up and then rearranges itself to its original state.
- **Fade Out**: A function that animates the text fading out to transparent.
- **Textillate**: A function that animates the text with a combination of effects such as rotation, scale, skew, and more.
- **Rainbow**: A function that animates the text with a rainbow color effect.
- **Parallax**: A function that animates the text with a parallax effect, where the text appears to move at different speeds as the user scrolls the page.
- **Pulse**: A function that animates the text with a pulsing effect, growing and shrinking repeatedly.
- **Skew**: A function that animates the text with a skew effect, making it look tilted.
- **Blur**: A function that animates the text with a blur effect, making it look out of focus.
- **Glitch**: A function that animates the text with a glitch effect, making it look like it's malfunctioning.
- **Shatter**: A function that animates the text as if it's shattering into pieces.
- **3D rotate**: A function that animates the text with a 3D rotation effect.
- **Fly in**: A function that animates the text flying in from the top or bottom of the screen.
- **Text Gradient**: A function that animates the text with a gradient effect, changing the text's color over time.
- **Text Shadow**: A function that animates the text with a shadow effect, changing the text's shadow over time.
- **Flicker**: A function that animates the text with a flicker effect, making it look like it's flickering.


# **Example 1**

#### In order to use your npm package in a React application, you'll need to first install it in your project using npm or yarn. Once the package is installed, you can import the animation functions you want to use in your React components.

- Here's an example of how you could use the "slideIn" animation function in a React component:
```
import React, { useEffect } from 'react';
import { slideIn } from 'anime-texty';

function MyComponent() {
    let textRef = React.createRef();

    useEffect(() => {
        slideIn(textRef.current, 'left');
    }, []);

    return (
        <div ref={textRef}>Animated Text</div>
    );
}

export default MyComponent;

```

- In this example, the MyComponent uses the useEffect hook to call the slideIn animation function and pass the div's ref as an argument after the component has rendered.

# **Example 2**

####  You can also use useState to control the animation by using state variable to control the animation and call the animation function on state change.

```
import React, { useEffect, useState } from 'react';
import { slideIn } from 'anime-texty';

function MyComponent() {
    let textRef = React.createRef();
    const [isAnimating, setAnimating] = useState(false);

    useEffect(() => {
        if(isAnimating){
            slideIn(textRef.current, 'left');
        }
    }, [isAnimating]);

    return (
        <div>
            <div ref={textRef}>Animated Text</div>
            <button onClick={() => setAnimating(!isAnimating)}>Toggle animation</button>
        </div>
    );
}
export default MyComponent;

```


- In this example, you can see how you can use state variable to control the animation and call animation function on state change.

- Keep in mind that you may need to make additional adjustments to the code depending on the specific requirements of your project, but this should give you a good starting point for using your npm package in a React application.

# **Example 3**

#### To add the animations to a specific div in an HTML file, you can pass the div's id or class as an argument to the animation functions.

- For example, if you have a div with the id of "animated-text", you can call the "slideIn" animation function like this:
`slideIn(document.getElementById('animated-text'), 'left');`

- Here's an example of how you could create a simple HTML file that uses the npm package to apply different animations to a specific div:

```
<!DOCTYPE html>
<html>
<head>
    <title>Animations Example</title>
</head>
<body>
    <div id="animated-text">Animated Text</div>
    <button id="slide-in-left">Slide In (Left)</button>
    <button id="slide-in-right">Slide In (Right)</button>
    <button id="zoom-in">Zoom In</button>
    <button id="spin">Spin</button>
    <script src="index.js"></script>
    <script>
        // Get the animated text div and the buttons
        let animatedText = document.getElementById('animated-text');
        let slideInLeft = document.getElementById('slide-in-left');
        let slideInRight = document.getElementById('slide-in-right');
        let zoomIn = document.getElementById('zoom-in');
        let spin = document.getElementById('spin');

        // Add event listeners to the buttons to apply the animations
        slideInLeft.addEventListener('click', () => slideIn(animatedText, 'left'));
        slideInRight.addEventListener('click', () => slideIn(animatedText, 'right'));
        zoomIn.addEventListener('click', () => zoomIn(animatedText));
        spin.addEventListener('click', () => spin(animatedText));
    </script>
</body>
</html>
```
- In this example, you can see how you can use the id of a div to select it and apply animation function to it. You can also add more buttons and event listeners to apply different animations to the same div or to different divs.