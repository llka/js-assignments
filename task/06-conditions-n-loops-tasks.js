'use strict';

/**************************************************************************************************
 *                                                                                                *
 * Plese read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling  *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration              *
 *                                                                                                *
 **************************************************************************************************/


/**
 * Returns the 'Fizz','Buzz' or an original number using the following rules:
 * 1) return original number
 * 2) but if number multiples of three return 'Fizz'
 * 3) for the multiples of five return 'Buzz'
 * 4) for numbers which are multiples of both three and five return 'FizzBuzz'
 *
 * @param {number} num
 * @return {any}
 *
 * @example
 *   2 =>  2
 *   3 => 'Fizz'
 *   5 => 'Buzz'
 *   4 => 4
 *  15 => 'FizzBuzz'
 *  20 => 'Buzz'
 *  21 => 'Fizz'
 *
 */
function getFizzBuzz(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return 'FizzBuzz';
    } else if (num % 3 === 0) {
        return 'Fizz';
    } else if (num % 5 === 0) {
        return 'Buzz';
    } else {
        return num;
    }
}


/**
 * Returns the factorial of the specified integer n.
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   1  => 1
 *   5  => 120
 *   10 => 3628800
 */
function getFactorial(n) {
    if (n === 1) {
        return 1;
    }
    return n * getFactorial(n - 1);
}


/**
 * Returns the sum of integer numbers between n1 and n2 (inclusive).
 *
 * @param {number} n1
 * @param {number} n2
 * @return {number}
 *
 * @example:
 *   1,2   =>  3  ( = 1+2 )
 *   5,10  =>  45 ( = 5+6+7+8+9+10 )
 *   -1,1  =>  0  ( = -1 + 0 + 1 )
 */
function getSumBetweenNumbers(n1, n2) {
    return Array.from({length: n2 - n1 + 1}, (v, i)=>i + n1).reduce((accum, curr) => accum += curr, 0);
}


/**
 * Returns true, if a triangle can be built with the specified sides a,b,c and false in any other ways.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {bool}
 *
 * @example:
 *   1,2,3    =>  false
 *   3,4,5    =>  true
 *   10,1,1   =>  false
 *   10,10,10 =>  true
 */
function isTriangle(a, b, c) {
    let sides = [a, b, c].sort((a, b)=>b - a);
    return sides[0] < sides[1] + sides[2];

}


/**
 * Returns true, if two specified axis-aligned rectangles overlap, otherwise false.
 * Each rectangle representing by object
 *  {
 *     top: 5,
 *     left: 5,
 *     width: 20,
 *     height: 10
 *  }
 *
 *  (5;5)
 *     -------------
 *     |           |
 *     |           |  height = 10
 *     -------------
 *        width=20
 *
 * NOTE: Please use canvas coordinate space (https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#The_grid),
 * it differs from Cartesian coordinate system.
 *
 * @param {object} rect1
 * @param {object} rect2
 * @return {bool}
 *
 * @example:
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top: 5, left: 5, width: 20, height: 20 }    =>  true
 *
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top:20, left:20, width: 20, height: 20 }    =>  false
 *
 */
function doRectanglesOverlap(rect1, rect2) {
    const x = 0;
    const y = 1;
    let d1 = [rect1.left + rect1.width, rect1.top + rect1.height];
    let d2 = [rect2.left + rect2.width, rect2.top + rect2.height];

    return rect1.left < d2[x]
        && d1[x] > rect2.left
        && rect1.top < d2[y]
        && d1[y] > rect2.top;
}


/**
 * Returns true, if point lies inside the circle, otherwise false.
 * Circle is an object of
 *  {
 *     center: {
 *       x: 5,       
 *       y: 5
 *     },        
 *     radius: 20
 *  }
 *
 * Point is object of
 *  {
 *     x: 5,
 *     y: 5
 *  }
 *
 * @param {object} circle
 * @param {object} point
 * @return {bool}
 *
 * @example:
 *   { center: { x:0, y:0 }, radius:10 },  { x:0, y:0 }     => true
 *   { center: { x:0, y:0 }, radius:10 },  { x:10, y:10 }   => false
 *
 */
function isInsideCircle(circle, point) {
    return Math.hypot((point.y - circle.center.y), (point.x - circle.center.x)) < circle.radius;
}


/**
 * Returns the first non repeated char in the specified strings otherwise returns null.
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 *   'The quick brown fox jumps over the lazy dog' => 'T'
 *   'abracadabra'  => 'c'
 *   'entente' => null
 */
function findFirstSingleChar(str) {
    let chars = [];
    for (let i = 0; i < 200; i++) {
        chars.push([0, 0]);
    }
    let times = 0;
    let index = 1;
    let s = Array.from(str);
    for (let i = 0; i < s.length; i++) {
        chars[s[i].charCodeAt(0)][times]++;
        chars[s[i].charCodeAt(0)][index] = i;
    }

    let firstIdx = 999;
    let result = null;
    for (let i = 0; i < 200; i++) {
        if (chars[i][times] === 1 && chars[i][index] < firstIdx) {
            firstIdx = index;
            result = String.fromCodePoint(i);
        }
    }
    return result;
}


/**
 * Returns the string representation of math interval, specified by two points and include / exclude flags.
 * See the details: https://en.wikipedia.org/wiki/Interval_(mathematics)
 *
 * Please take attention, that the smaller number should be the first in the notation
 *
 * @param {number} a
 * @param {number} b
 * @param {bool} isStartIncluded
 * @param {bool} isEndIncluded
 * @return {string}
 *
 * @example
 *   0, 1, true, true   => '[0, 1]'
 *   0, 1, true, false  => '[0, 1)'
 *   0, 1, false, true  => '(0, 1]'
 *   0, 1, false, false => '(0, 1)'
 * Smaller number has to be first :
 *   5, 3, true, true   => '[3, 5]'
 *
 */
function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
    let interval = '';
    if (a > b) {
        a = a + b;
        b = a - b;
        a = a - b;
    }
    interval += isStartIncluded ? '[' : '(';
    interval += a + ', ' + b;
    interval += isEndIncluded ? ']' : ')';

    return interval;
}


/**
 * Reverse the specified string (put all chars in reverse order)
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 * 'The quick brown fox jumps over the lazy dog' => 'god yzal eht revo spmuj xof nworb kciuq ehT'
 * 'abracadabra' => 'arbadacarba'
 * 'rotator' => 'rotator'
 * 'noon' => 'noon'
 */
function reverseString(str) {
    let s = Array.from(str);
    let len = s.length;
    for (let i = 0; i < Math.floor(len / 2); i++) {
        let temp = s[i];
        s[i] = s[len - i - 1];
        s[len - i - 1] = temp;
    }
    str = s.join('');
    return str;
}


/**
 * Reverse the specified integer number (put all digits in reverse order)
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   12345 => 54321
 *   1111  => 1111
 *   87354 => 45378
 *   34143 => 34143
 */
function reverseInteger(num) {
    let result = 0;
    while (num != 0) {
        let tail = num % 10;
        let checkResult = result * 10 + tail;
        result = checkResult;
        num = Math.floor(num / 10);
    }
    return result;
}


/**
 * Validates the CCN (credit card number) and return true if CCN is valid
 * and false otherwise.
 *
 * See algorithm here : https://en.wikipedia.org/wiki/Luhn_algorithm
 *
 * @param {number} cnn
 * @return {boolean}
 *
 * @example:
 *   79927398713      => true
 *   4012888888881881 => true
 *   5123456789012346 => true
 *   378282246310005  => true
 *   371449635398431  => true
 *
 *   4571234567890111 => false
 *   5436468789016589 => false
 *   4916123456789012 => false
 */
function isCreditCardNumber(ccn) {
    let nums = Array.from(ccn.toString());
    nums.reverse();
    for (let i = 1; i < nums.length; i += 2) {
        nums[i] = nums[i] * 2 > 9 ? nums[i] * 2 - 9 : nums[i] * 2;
    }
    return nums.reduce((accum, curr) => accum += Number.parseInt(curr), 0) % 10 === 0;
}


/**
 * Returns the digital root of integer:
 *   step1 : find sum of all digits
 *   step2 : if sum > 9 then goto step1 otherwise return the sum
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   12345 ( 1+2+3+4+5 = 15, 1+5 = 6) => 6
 *   23456 ( 2+3+4+5+6 = 20, 2+0 = 2) => 2
 *   10000 ( 1+0+0+0+0 = 1 ) => 1
 *   165536 (1+6+5+5+3+6 = 26,  2+6 = 8) => 8
 */
function getDigitalRoot(num) {
    let sum = Array.from(num.toString()).reduce((accum, curr) => accum += Number.parseInt(curr), 0);
    while (sum > 9) {
        sum = Array.from(sum.toString()).reduce((accum, curr) => accum += Number.parseInt(curr), 0);
    }
    return sum;
}


/**
 * Returns true if the specified string has the balanced brackets and false otherwise.
 * Balanced means that is, whether it consists entirely of pairs of opening/closing brackets
 * (in that order), none of which mis-nest.
 * Brackets include [],(),{},<>
 *
 * @param {string} str
 * @return {boolean}
 *
 * @example:
 *   '' => true
 *   '[]'  => true
 *   '{}'  => true
 *   '()   => true
 *   '[[]' => false
 *   ']['  => false
 *   '[[][][[]]]' => true
 *   '[[][]][' => false
 *   '{)' = false
 *   '{[(<{[]}>)]}' = true 
 */
function isBracketsBalanced(str) {
    let brackets = Array.from(str);

    const bracketPairs = {
        ']': '[',
        '}': '{',
        ')': '(',
        '>': '<'
    };
    let stack = [];

    for (let bracket of brackets) {
        if (!bracketPairs[bracket]) {
            stack.push(bracket);
        } else if (stack[stack.length - 1] === bracketPairs[bracket]) {
            stack.pop();
        } else {
            return false;
        }
    }
    return stack.length === 0;
}


/**
 * Returns the human readable string of time period specified by the start and end time.
 * The result string should be constrcuted using the folliwing rules:
 *
 * ---------------------------------------------------------------------
 *   Difference                 |  Result
 * ---------------------------------------------------------------------
 *    0 to 45 seconds           |  a few seconds ago
 *   45 to 90 seconds           |  a minute ago
 *   90 seconds to 45 minutes   |  2 minutes ago ... 45 minutes ago
 *   45 to 90 minutes           |  an hour ago
 *  90 minutes to 22 hours      |  2 hours ago ... 22 hours ago
 *  22 to 36 hours              |  a day ago
 *  36 hours to 25 days         |  2 days ago ... 25 days ago
 *  25 to 45 days               |  a month ago
 *  45 to 345 days              |  2 months ago ... 11 months ago
 *  345 to 545 days (1.5 years) |  a year ago
 *  546 days+                   |  2 years ago ... 20 years ago
 * ---------------------------------------------------------------------
 *
 * @param {Date} startDate
 * @param {Date} endDate
 * @return {string}
 *
 * @example
 *   Date('2000-01-01 01:00:00.100'), Date('2000-01-01 01:00:00.200')  => 'a few seconds ago'
 *   Date('2000-01-01 01:00:00.100'), Date('2000-01-01 01:00:05.000')  => '5 minutes ago'
 *   Date('2000-01-01 01:00:00.100'), Date('2000-01-02 03:00:05.000')  => 'a day ago'
 *   Date('2000-01-01 01:00:00.100'), Date('2015-01-02 03:00:05.000')  => '15 years ago'
 *
 */
function timespanToHumanString(startDate, endDate) {
    const second = 1000;
    const minute = 60 * second;
    const hour = 60 * minute;
    const day = 24 * hour;
    const month = 30 * day;
    const year = 12 * month;
    let round = (ts, units) => Math.round((ts - 1) / units);

    let timespan = Math.abs(startDate.getTime() - endDate.getTime());

    if (timespan <= 45 * second) {
        return 'a few seconds ago';
    }
    if (timespan <= 90 * second) {
        return 'a minute ago';
    }
    if (timespan <= 45 * minute) {
        return `${round(timespan, minute)} minutes ago`;
    }
    if (timespan <= 90 * minute) {
        return 'an hour ago';
    }
    if (timespan <= 22 * hour) {
        return `${round(timespan, hour)} hours ago`;
    }
    if (timespan <= 36 * hour) {
        return 'a day ago';
    }
    if (timespan <= 25 * day) {
        return `${round(timespan, day)} days ago`;
    }
    if (timespan <= 45 * day) {
        return 'a month ago';
    }
    if (timespan <= 345 * day) {
        return `${round(timespan, month)} months ago`;
    }
    if (timespan <= 545 * day) {
        return 'a year ago';
    }
    return `${round(timespan, year)} years ago`;
}


/**
 * Returns the string with n-ary (binary, ternary, etc, where n<=10) representation of specified number.
 * See more about
 * https://en.wikipedia.org/wiki/Binary_number
 * https://en.wikipedia.org/wiki/Ternary_numeral_system
 * https://en.wikipedia.org/wiki/Radix
 *
 * @param {number} num
 * @param {number} n, radix of the result
 * @return {string}
 *
 * @example:
 *   1024, 2  => '10000000000'
 *   6561, 3  => '100000000'
 *    365, 2  => '101101101'
 *    365, 3  => '111112'
 *    365, 4  => '11231'
 *    365, 10 => '365'
 */
function toNaryString(num, n) {
    let result = [];
    while (num > 0) {
        result.unshift(num % n);
        num = Math.floor(num / n);
    }
    return result.join('');
}


/**
 * Returns the commom directory path for specified array of full filenames.
 *
 * @param {array} pathes
 * @return {string}
 *
 * @example:
 *   ['/web/images/image1.png', '/web/images/image2.png']  => '/web/images/'
 *   ['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf'] => ''
 *   ['/web/assets/style.css', '/.bin/mocha',  '/read.me'] => '/'
 *   ['/web/favicon.ico', '/web-scripts/dump', '/webalizer/logs'] => '/'
 */
function getCommonDirectoryPath(pathes) {
    let commonPath = [];
    let prevPath = pathes[0].split('/');
    let slash = true;
    for (let i = 1; i < pathes.length; i++) {
        if (pathes[i].charAt(0).localeCompare('/') !== 0) {
            slash = false;
        }
        let path = pathes[i].split('/');
        for (let j = 0; j < Math.min(path.length, prevPath.length); j++) {
            if (path[j].localeCompare(prevPath[j]) == 0) {
                if (!commonPath.includes(path[j])) {
                    commonPath.push(path[j]);
                }
            } else {
                if (commonPath.includes(prevPath[j])) {
                    commonPath.pop();
                }
            }
        }
    }
    if (commonPath.length == 1) {
        return slash ? '/' : '';
    } else {
        return commonPath.join('/') + '/';
    }
}


/**
 * Returns the product of two specified matrixes.
 * See details: https://en.wikipedia.org/wiki/Matrix_multiplication
 *
 * @param {array} m1
 * @param {array} m2
 * @return {array}
 *
 * @example:
 *   [[ 1, 0, 0 ],       [[ 1, 2, 3 ],           [[ 1, 2, 3 ],
 *    [ 0, 1, 0 ],   X    [ 4, 5, 6 ],     =>     [ 4, 5, 6 ],
 *    [ 0, 0, 1 ]]        [ 7, 8, 9 ]]            [ 7, 8, 9 ]]
 *
 *                        [[ 4 ],
 *   [[ 1, 2, 3]]    X     [ 5 ],          =>     [[ 32 ]]
 *                         [ 6 ]]
 *
 */
function getMatrixProduct(m1, m2) {
    let result = [];
    for (let i = 0; i < m1.length; ++i) {
        result[i] = [];
        for (let j = 0; j < m1.length; ++j) {
            result[i][j] = 0;
            for (let k = 0; k < m2.length; ++k) {
                result[i][j] += m1[i][k] * m2[k][j];
            }
        }
    }
    return result;
}


/**
 * Returns the evaluation of the specified tic-tac-toe position.
 * See the details: https://en.wikipedia.org/wiki/Tic-tac-toe
 *
 * Position is provides as 3x3 array with the following values: 'X','0', undefined
 * Function should return who is winner in the current position according to the game rules.
 * The result can be: 'X','0',undefined
 *
 * @param {array} position
 * @return {string}
 *
 * @example
 *
 *   [[ 'X',   ,'0' ],
 *    [    ,'X','0' ],       =>  'X'
 *    [    ,   ,'X' ]]
 *
 *   [[ '0','0','0' ],
 *    [    ,'X',    ],       =>  '0'
 *    [ 'X',   ,'X' ]]
 *
 *   [[ '0','X','0' ],
 *    [    ,'X',    ],       =>  undefined
 *    [ 'X','0','X' ]]
 *
 *   [[    ,   ,    ],
 *    [    ,   ,    ],       =>  undefined
 *    [    ,   ,    ]]
 *
 */
function evaluateTicTacToePosition(position) {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if ('X'.localeCompare(position[i][j]) !== 0) {
                break;
            }
            if (j === 2) {
                return 'X';
            }
        }
    }
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if ('0'.localeCompare(position[i][j]) !== 0) {
                break;
            }
            if (j === 2) {
                return '0';
            }
        }
    }

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if ('X'.localeCompare(position[j][i]) !== 0) {
                break;
            }
            if (j === 2) {
                return 'X';
            }
        }
    }
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if ('0'.localeCompare(position[j][i]) !== 0) {
                break;
            }
            if (j === 2) {
                return '0';
            }
        }
    }

    for (let i = 0; i < 3; i++) {
        if ('X'.localeCompare(position[i][i]) !== 0) {
            break;
        }
        if (i === 2) {
            return 'X';
        }
    }
    for (let i = 0; i < 3; i++) {
        if ('0'.localeCompare(position[i][i]) !== 0) {
            break;
        }
        if (i === 2) {
            return '0';
        }
    }

    for (let i = 0; i < 3; i++) {
        if ('X'.localeCompare(position[i][2 - i]) !== 0) {
            break;
        }
        if (i === 2) {
            return 'X';
        }
    }
    for (let i = 0; i < 3; i++) {
        if ('0'.localeCompare(position[i][2 - i]) !== 0) {
            break;
        }
        if (i === 2) {
            return '0';
        }
    }

    return undefined;

}


module.exports = {
    getFizzBuzz: getFizzBuzz,
    getFactorial: getFactorial,
    getSumBetweenNumbers: getSumBetweenNumbers,
    isTriangle: isTriangle,
    doRectanglesOverlap: doRectanglesOverlap,
    isInsideCircle: isInsideCircle,
    findFirstSingleChar: findFirstSingleChar,
    getIntervalString: getIntervalString,
    reverseString: reverseString,
    reverseInteger: reverseInteger,
    isCreditCardNumber: isCreditCardNumber,
    getDigitalRoot: getDigitalRoot,
    isBracketsBalanced: isBracketsBalanced,
    timespanToHumanString: timespanToHumanString,
    toNaryString: toNaryString,
    getCommonDirectoryPath: getCommonDirectoryPath,
    getMatrixProduct: getMatrixProduct,
    evaluateTicTacToePosition: evaluateTicTacToePosition
};
