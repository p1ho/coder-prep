# Coder Prep

This is just a small project I created to augment interview preparation. [LeetCode](https://leetcode.com/) is definitely helpful, but talking to someone as you solve the problem is also part of the challenge. [CoderPad](https://coderpad.io/) lets you do this, but why do it in a browser when you can do it right in VS Code?

VS Code has a [Live Share](https://code.visualstudio.com/blogs/2017/11/15/live-share) extension that allows your mock interviewer to join you in your VS Code environment, combined with voice-call software this should be helpful for training communication skills and the ability to think and code out loud.

This project makes it easy to bootstrap a problem with its testcases, this allows you to quickly check your solution with your mock interviewer.

# Usage

`$ chmod u+x create` to make the bash script executable

`$ ./create` to create a new problem

The newly created problem will be inside `./challenges` folder

Feel free to check out `./challenges/example.js` to see what it might look like.

To execute a solved challenge, you would go inside `./challenges` folder, and run

```
$ node <insert-challenge-name>
```

Example Output:
```
$ node example
--------------------------------------
Passed Testcase 1:
        Input:
        1, 1
        Output:
        2
--------------------------------------
Passed Testcase 2:
        Input:
        -1, 1
        Output:
        0
--------------------------------------
Passed Testcase 3:
        Input:
        12345, 54321
        Output:
        66666
--------------------------------------
```
