// let a_c = document.getElementById("a_c")
// let w_cc = document.getElementById("w_cc")
// let s_d = document.getElementById("s_d")
// let e_dd = document.getElementById("e_dd")
// let d_e = document.getElementById("d_e")
// let f_f = document.getElementById("f_f")
// let t_ff = document.getElementById("t_ff")
// let g_g = document.getElementById("g_g")
// let y_gg = document.getElementById("y_gg")
// let h_a = document.getElementById("h_a")
// let u_aa = document.getElementById("u_aa")
// let j_b = document.getElementById("j_b")
// let k_c = document.getElementById("k_c")
// let o_cc = document.getElementById("o_cc")
// let l_d = document.getElementById("l_d")
// let p_dd = document.getElementById("p_dd")
// let _e = document.getElementById("_e")


let a = document.getElementById("a")
let w = document.getElementById("w")
let s = document.getElementById("s")
let e = document.getElementById("e")
let d = document.getElementById("d")
let f = document.getElementById("f")
let t = document.getElementById("t")
let g = document.getElementById("g")
let y = document.getElementById("y")
let h = document.getElementById("h")
let u = document.getElementById("u")
let j = document.getElementById("j")
let k = document.getElementById("k")
let o = document.getElementById("o")
let l = document.getElementById("l")
let p = document.getElementById("p")
let _ = document.getElementById("_")

// keyboard create 
document.onkeydown = function(here){
    // keys blinks
    let key = here.keyCode

    // 1
    if(key === 65){
        a.load()
        a.play()
        a_c.classList.add("animate_white")
        setTimeout(() => {
            a_c.classList.remove("animate_white")
        }, 101);
    }

    // 2
    else if(key === 87){
        w.load()
        w.play()
        w_cc.classList.add("animate_black")
        setTimeout(() => {
            w_cc.classList.remove("animate_black")
        }, 101);
    }

    // 3
    else if(key === 83){
        s.load()
        s.play()
        s_d.classList.add("animate_white")
        setTimeout(() => {
            s_d.classList.remove("animate_white")
        }, 101);
    }

    // 4
    else if(key === 69){
        e.load()
        e.play()
        e_dd.classList.add("animate_black")
        setTimeout(() => {
            e_dd.classList.remove("animate_black")
        }, 101);
    }

    // 5
    else if(key === 68){
        d.load()
        d.play()
        d_e.classList.add("animate_white")
        setTimeout(() => {
            d_e.classList.remove("animate_white")
        }, 101);
    }

    // 6
    else if(key === 70){
        f.load()
        f.play()
        f_f.classList.add("animate_white")
        setTimeout(() => {
            f_f.classList.remove("animate_white")
        }, 101);
    }

    // 7
    else if(key === 84){
        t.load()
        t.play()
        t_ff.classList.add("animate_black")
        setTimeout(() => {
            t_ff.classList.remove("animate_black")
        }, 101);
    }

    // 8
    else if(key === 71){
        g.load()
        g.play()
        g_g.classList.add("animate_white")
        setTimeout(() => {
            g_g.classList.remove("animate_white")
        }, 101);
    }

    // 9
    else if(key === 89){
        y.load()
        y.play()
        y_gg.classList.add("animate_black")
        setTimeout(() => {
            y_gg.classList.remove("animate_black")
        }, 101);
    }

    // 10
    else if(key === 72){
        h.load()
        h.play()
        h_a.classList.add("animate_white")
        setTimeout(() => {
            h_a.classList.remove("animate_white")
        }, 101);
    }

    // 11
    else if(key === 85){
        u.load()
        u.play()
        u_aa.classList.add("animate_black")
        setTimeout(() => {
            u_aa.classList.remove("animate_black")
        }, 101);
    }

    // 12
    else if(key === 74){
        j.load()
        j.play()
        j_b.classList.add("animate_white")
        setTimeout(() => {
            j_b.classList.remove("animate_white")
        }, 101);
    }

    // 13
    else if(key === 75){
        k.load()
        k.play()
        k_c.classList.add("animate_white")
        setTimeout(() => {
            k_c.classList.remove("animate_white")
        }, 101);
    }

    // 14
    else if(key === 79){
        o.load()
        o.play()
        o_cc.classList.add("animate_black")
        setTimeout(() => {
            o_cc.classList.remove("animate_black")
        }, 101);
    }

    // 15
    else if(key === 76){
        l.load()
        l.play()
        l_d.classList.add("animate_white")
        setTimeout(() => {
            l_d.classList.remove("animate_white")
        }, 101);
    }

    // 16
    else if(key === 80){
        p.load()
        p.play()
        p_dd.classList.add("animate_black")
        setTimeout(() => {
            p_dd.classList.remove("animate_black")
        }, 101);
    }

    // 17
    else if(key === 186){
        _.load()
        _.play()
        _e.classList.add("animate_white")
        setTimeout(() => {
            _e.classList.remove("animate_white")
        }, 101);
    }

}
