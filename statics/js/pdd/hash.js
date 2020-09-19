 e = function (r) {
    var t, n, o = {
            encoding: "x"
        },
        e = {
            _cO: [
                [-1658786019, 1493325398, 302215178, 135624897, -783129214, -2103672236, -1658334583, -1121316849],
                [1755450666, 714729647, 1577142459, 1932142337, 404359373, -1842008283, 694480344, -1009175083]
            ],
            "_bæ": 16,
            _dD: function (r, t) {
                return t >>> r | t << 32 - r
            },
            _cc: function (r) {
                return e._dD(2, r) ^ e._dD(13, r) ^ e._dD(22, r)
            },
            "_cÀ": function (r) {
                return e._dD(6, r) ^ e._dD(11, r) ^ e._dD(25, r)
            },
            _dY: function (r) {
                return e._dD(7, r) ^ e._dD(18, r) ^ r >>> 3
            },
            _ct: function (r) {
                return e._dD(17, r) ^ e._dD(19, r) ^ r >>> 10
            },
            "_cì": function (r, t, n) {
                return r & t ^ ~r & n
            },
            "_ý": function (r, t, n) {
                return r & t ^ r & n ^ t & n
            },
            "_cé": [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
            _da: function (r) {
                try {
                    var t, n, o, e, c = "",
                        _ = [];
                    for (t = 0, o = r.length; t < o; t++)(n = r.charCodeAt(t)) < 128 ? _.push(n) : n < 2048 ? _.push(192 | n >> 6, 128 | 63 & n) : n < 55296 || n >= 57344 ? _.push(224 | n >> 12, 128 | n >> 6 & 63, 128 | 63 & n) : (t++, n = 65536 + ((1023 & n) << 10 | 1023 & r.charCodeAt(t)), _.push(240 | n >> 18, 128 | n >> 12 & 63, 128 | n >> 6 & 63, 128 | 63 & n));
                    for (t = 0, e = _.length; t < e; t++) c += String.fromCharCode(_[t]);
                    return c
                } catch (r) {
                    throw new Error("bad")
                }
            },
            "_bÈ": function (r) {
                var t, n = [];
                for (t = 3; t >= 0; t--) n[3 - t] = r >>> 8 * t & 255;
                return n
            },
            "_cö": function (r) {
                var t, n, o, c, _, a = "";
                for (t = 0, o = r.length; t < o; t++)
                    for (n = 0, _ = (c = e._bÈ(r[t])).length; n < _; n++) a += String.fromCharCode(c[n]);
                return a
            },
            _dR: function (r) {
                var t, n, o, c, _, a = "";
                for (t = 0, c = r.length; t < c; t++)
                    for (o = 0, _ = (n = e._bÈ(r[t])).length; o < _; o++) a += (n[o] < 16 ? "0" : "") + n[o].toString(16);
                return a
            },
            "_bã": function (r) {
                if (0 === r.length) return "";
                if (r.length % 2 == 1) throw Error("Odd-length string");
                var t, n = "",
                    o = r.match(/[0-9a-f]{2}/gi),
                    e = o.length;
                for (t = 0; t < e; t++) n += String.fromCharCode(parseInt(o[t], 16));
                return n
            }
        },
        c = {},
        _ = !(D = []) + c,
        a = _[2];
    t = "g" + (A = _[4]), n = (_ = !!~c + c)[0] + A.toUpperCase() + a + A;
    // var f = document;
    switch ("x") {
        case "hex":
            r = e._bã(r);
            break;
        default:
            r = e._da(r)
    }
    var h = (r += String.fromCharCode(128)).length / 4 + 2,
        d = Math.ceil(h / e._bæ),
        i = [];
    for (O = 0; O < d; O++)
        for (i[O] = [], y = 0; y < e._bæ; y++) i[O][y] = r.charCodeAt(64 * O + 4 * y) << 24 | r.charCodeAt(64 * O + 4 * y + 1) << 16 | r.charCodeAt(64 * O + 4 * y + 2) << 8 | r.charCodeAt(64 * O + 4 * y + 3);
    var u = r.length + 4 * e._bæ - 1;
    i[d - 1][e._bæ - 2] = 8 * u / Math.pow(2, 32), i[d - 1][e._bæ - 2] = Math.floor(i[d - 1][e._bæ - 2]), i[d - 1][e._bæ - 1] = 8 * u & 4294967295;
    var b = i,
        g = e._cO[0].slice(),
        s = [];
    d = b.length;
    for (O = 0; O < d; O++) {
        for (y = 0; y < e._bæ; y++) s[y] = b[O][y];
        for (y = e._bæ; y < 64; y++) s[y] = e._ct(s[y - 2]) + s[y - 7] + e._dY(s[y - 15]) + s[y - 16], s[y] &= 4294967295;
        for (v = g[0], w = g[1], m = g[2], D = g[3], A = g[4], S = g[5], k = g[6], M = g[7], y = 0; y < 64; y++) {
            var l = M + e._cÀ(A) + e._cì(A, S, k) + e._cé[y] + s[y],
                C = e._cc(v) + e._ý(v, w, m);
            M = k, k = S, S = A, A = D + l & 4294967295, D = m, m = w, w = v, v = l + C & 4294967295
        }
        g[0] = g[0] + v & 4294967295, g[1] = g[1] + w & 4294967295, g[2] = g[2] + m & 4294967295, g[3] = g[3] + D & 4294967295, g[4] = g[4] + A & 4294967295, g[5] = g[5] + S & 4294967295, g[6] = g[6] + k & 4294967295, g[7] = g[7] + M & 4294967295
    }
    var p = g;
    r = e._cö(p);
    h = (r += String.fromCharCode(128)).length / 4 + 2, d = Math.ceil(h / e._bæ), i = [];
    for (O = 0; O < d; O++)
        for (i[O] = [], y = 0; y < e._bæ; y++) i[O][y] = r.charCodeAt(64 * O + 4 * y) << 24 | r.charCodeAt(64 * O + 4 * y + 1) << 16 | r.charCodeAt(64 * O + 4 * y + 2) << 8 | r.charCodeAt(64 * O + 4 * y + 3);
    u = r.length + 4 * e._bæ - 1;
    i[d - 1][e._bæ - 2] = 8 * u / Math.pow(2, 32), i[d - 1][e._bæ - 2] = Math.floor(i[d - 1][e._bæ - 2]), i[d - 1][e._bæ - 1] = 8 * u & 4294967295, b = i, g = e._cO[1].slice();
    var v, w, m, D, A, S, k, M, O, y;
    s = [], d = b.length;
    for (O = 0; O < d; O++) {
        for (y = 0; y < e._bæ; y++) s[y] = b[O][y];
        for (y = e._bæ; y < 64; y++) s[y] = e._ct(s[y - 2]) + s[y - 7] + e._dY(s[y - 15]) + s[y - 16], s[y] &= 4294967295;
        for (v = g[0], w = g[1], m = g[2], D = g[3], A = g[4], S = g[5], k = g[6], M = g[7], y = 0; y < 64; y++) {
            l = M + e._cÀ(A) + e._cì(A, S, k) + e._cé[y] + s[y], C = e._cc(v) + e._ý(v, w, m);
            M = k, k = S, S = A, A = D + l & 4294967295, D = m, m = w, w = v, v = l + C & 4294967295
        }
        g[0] = g[0] + v & 4294967295, g[1] = g[1] + w & 4294967295, g[2] = g[2] + m & 4294967295, g[3] = g[3] + D & 4294967295, g[4] = g[4] + A & 4294967295, g[5] = g[5] + S & 4294967295, g[6] = g[6] + k & 4294967295, g[7] = g[7] + M & 4294967295
    }
    p = g;
    var j = "";
    switch (o.encoding) {
        case "hex":
            j = e._dR(p);
            break;
        case "binary":
            j = e._cö(p);
            break;
        default:
            j = e._dR(p)
    }
    return j
}

// var password = "username=dsafsad&password=Ae9IJRG3cy63dsrTsmGsyTRYwXCuRd9GCnyB4/uENEiCfiGDuWQ1HJl1aB4Mgd09edKG3X1dNzK0vhtPQoI2/VPR1Jx1ciwMBprCZdLLtedORCofGN08wWlRko2vjQYu+eqI+hNbTPyX3v0L9lPSc9eQ+gjjECI1sdeYiFpezmw=&ts=1600500576235"
// 标准值应该是 "a9ec87bd449786d5610d8829792d09ff8ece9b899b422c17e04cc7fb6bd76732"
// 测试值 "a9ec87bd449786d5610d8829792d09ff8ece9b899b422c17e04cc7fb6bd76732"
var password = "username=dsafsad&password=rAqMDNUZMA/VeYX//H71RsJB3kd9Jes0XjcUL7PQxzx6XMpYJHa22qH6/XxBHP73fO7tKYdvbqrYVmoEkBOyrpey/5kzURfj6YXJcqBh4DWp/HCbV2zsSDi8ryDN5s4nR+G05yehpuCAdKAPS6CfKXy+hEYv5incmHt+kzN8VLw=&ts=1600500769639"
// riskSign: "122a11317d95856d6716659b1fe00c4df6f5a56d29a1f9fe3bda6675ec8f4d27"
// 122a11317d95856d6716659b1fe00c4df6f5a56d29a1f9fe3bda6675ec8f4d27
console.log(e(password))