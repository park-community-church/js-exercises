/*
 * Tell me what each of these function does.
 * They have cryptic names and horrible variable names and magic numbers on purpose.
 */

function one(x) {
    return x * x;
}

function two(a) {
    var b = 0;
    for (var i = 0; i < a.length; i++) {
        b += a[i];
    }
    return b / a.length;
}

function three(x, y, z) {
    return 3600 * x + 60 * y + z;
}

function four(r, s) {
    if (s < r) return false;
    var t = s - r;

    var q = [0, 0, 0, 0];
    while (t > 0.25) {
        q[0] += 1;
        t -= 0.25;
    }
    while (t > 0.10) {
        q[1] += 1;
        t -= 0.10;
    }
    while (t > 0.05) {
        q[2] += 1;
        t -= 0.05;
    }
    q[3] += t * 100;
    return q;
}

function five(a) {
    var b = a.length;
    var c = Math.floor(b/ 2);
    b -= 1;
    for (var i = 0; i < c; i++) {
        if (a.charAt(i) !== a.charAt(b - i)) {
            return false;
        }
    }
    return true;
}
