(this["webpackJsonpreact-pizza-v1"] = this["webpackJsonpreact-pizza-v1"] || []).push([[0], {
    31: function(n, e, t) {
        "use strict";
        t.r(e);
        var r = t(1)
          , i = t(0)
          , c = t.n(i)
          , a = t(15)
          , o = t.n(a)
          , s = t(19)
          , u = t(2)
          , d = t(3)
          , b = t(5)
          , f = t(6);
        function l() {
            var n = Object(u.a)(["\n  font-size: 2rem;\n  transform: translate(-50%, -15%);\n"]);
            return l = function() {
                return n
            }
            ,
            n
        }
        function j() {
            var n = Object(u.a)(["\n  display: block;\n  position: absolute;\n  top: 0;\n  right: 0;\n  cursor: pointer;\n  color: #fff;\n\n  p {\n    transform: translate(-175%, 100%);\n    font-weight: bold;\n  }\n"]);
            return j = function() {
                return n
            }
            ,
            n
        }
        function p() {
            var n = Object(u.a)(["\n  color: #fff;\n  font-size: 2rem;\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  cursor: pointer;\n\n  @media screen and (max-width: 400px) {\n    position: absolute;\n    top: 10px;\n    left: 25px;\n  }\n"]);
            return p = function() {
                return n
            }
            ,
            n
        }
        function m() {
            var n = Object(u.a)(["\n  background: transparent;\n  height: 80px;\n  display: flex;\n  justify-content: center;\n  font-weight: 700;\n"]);
            return m = function() {
                return n
            }
            ,
            n
        }
        var h = d.b.nav(m())
          , x = Object(d.b)(b.c)(p())
          , g = d.b.div(j())
          , O = Object(d.b)(f.c)(l())
          , v = function(n) {
            var e = n.toggle;
            return Object(r.jsx)("div", {
                children: Object(r.jsxs)(h, {
                    children: [Object(r.jsx)(x, {
                        to: "/",
                        children: "Pizza"
                    }), Object(r.jsxs)(g, {
                        onClick: e,
                        children: [Object(r.jsx)("p", {
                            children: "Menu"
                        }), Object(r.jsx)(O, {})]
                    })]
                })
            })
        };
        function w() {
            var n = Object(u.a)(["\n  background: #e31837;\n  white-space: nowrap;\n  padding: 16px 64px;\n  color: #fff;\n  font-size: 16px;\n  outline: none;\n  border: none;\n  cursor: pointer;\n  transition: 0.2s ease-in-out;\n  text-decoration: none;\n\n  &:hover {\n    transition: 0.2 ease-in-out;\n    background: #fff;\n    color: #010606;\n  }\n"]);
            return w = function() {
                return n
            }
            ,
            n
        }
        function z() {
            var n = Object(u.a)(["\n  display: flex;\n  justify-content: center;\n"]);
            return z = function() {
                return n
            }
            ,
            n
        }
        function k() {
            var n = Object(u.a)(["\n  display: flex;\n  align-itesm: center;\n  justify-content: center;\n  font-size: 1.5rem;\n  text-decoration: none;\n  list-style: none;\n  transition: 0.2s ease-in-out;\n  text-decoration: none;\n  color: #000;\n  cursor: pointer;\n\n  &:hover {\n    color; #e31837;\n    transition: 0.2s ease-in-out;\n  }\n"]);
            return k = function() {
                return n
            }
            ,
            n
        }
        function y() {
            var n = Object(u.a)(["\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: repeat(3, 80px);\n  text-align: center;\n\n  @media screen and (max-width: 480px) {\n    grid-template-rows: repeat(3, 60px);\n  }\n"]);
            return y = function() {
                return n
            }
            ,
            n
        }
        function C() {
            var n = Object(u.a)(["\n  position: absolute;\n  top: 1.2rem;\n  right: 1.5rem;\n  background: transparent;\n  border: transparent;\n  font-size: 2rem;\n  cursor: pointer;\n  outline: none;\n"]);
            return C = function() {
                return n
            }
            ,
            n
        }
        function P() {
            var n = Object(u.a)(["\n  color: #000;\n"]);
            return P = function() {
                return n
            }
            ,
            n
        }
        function A() {
            var n = Object(u.a)(["\n  position: fixed;\n  z-index: 999;\n  width: 350px;\n  height: 100%;\n  background: #ffc500;\n  display: grid;\n  align-items: center;\n  top: 0;\n  transition: 0.3s ease-in-out;\n  right: ", ";\n\n  @media screen and (max-width: 400px) {\n    width: 100%;\n  }\n"]);
            return A = function() {
                return n
            }
            ,
            n
        }
        var B = d.b.aside(A(), (function(n) {
            return n.isOpen ? "0" : "-1000px"
        }
        ))
          , D = Object(d.b)(f.d)(P())
          , F = d.b.div(C())
          , M = d.b.div(y())
          , $ = Object(d.b)(b.b)(k())
          , S = d.b.div(z())
          , T = Object(d.b)(b.b)(w())
          , I = function(n) {
            var e = n.isOpen
              , t = n.toggle;
            return Object(r.jsxs)(B, {
                isOpen: e,
                onClick: t,
                children: [Object(r.jsx)(F, {
                    onClick: t,
                    children: Object(r.jsx)(D, {})
                }), Object(r.jsxs)(M, {
                    children: [Object(r.jsx)($, {
                        to: "/",
                        children: "Pizza"
                    }), Object(r.jsx)($, {
                        to: "/",
                        children: "Desserts"
                    }), Object(r.jsx)($, {
                        to: "/",
                        children: "Full Menu"
                    })]
                }), Object(r.jsx)(S, {
                    children: Object(r.jsx)(T, {
                        to: "/",
                        children: "Order Now"
                    })
                })]
            })
        }
          , _ = t.p + "static/media/pizza-3.f2f9b9a4.jpg";
        function E() {
            var n = Object(u.a)(["\n  font-size: 1.4rem;\n  padding: 1rem 4rem;\n  border: none;\n  background: #e31837;\n  color: #fff;\n  transition: 0.2s ease-out;\n\n  &:hover {\n    background: #ffc500;\n    transition: 0.2s ease-out;\n    cursor: pointer;\n    color: #000;\n  }\n"]);
            return E = function() {
                return n
            }
            ,
            n
        }
        function J() {
            var n = Object(u.a)(["\n  font-size: clamp(2rem, 2.5vw, 3rem);\n  margin-bottom: 2rem;\n"]);
            return J = function() {
                return n
            }
            ,
            n
        }
        function L() {
            var n = Object(u.a)(["\n  font-size: clamp(2.5rem, 10vw, 5rem);\n  margin-bottom: 1rem;\n  box-shadow: 3px 5px #e9ba23;\n  letter-spacing: 3px;\n"]);
            return L = function() {
                return n
            }
            ,
            n
        }
        function N() {
            var n = Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  height: 100vh;\n  max-height: 100%;\n  padding: 0 2rem;\n  width: 650px;\n  color: #fff;\n  text-transform: uppercase;\n  line-height: 1;\n  font-weight: bold;\n  \n  @media screen and (max-width: 650px) {\n    width: 100%;\n  }\n"]);
            return N = function() {
                return n
            }
            ,
            n
        }
        function V() {
            var n = Object(u.a)(["\n  height: calc(100vh -80px);\n  max-height: 100%;\n  width: 100vw;\n  padding: 0rem calc((100vw - 1300px) / 2);\n"]);
            return V = function() {
                return n
            }
            ,
            n
        }
        function Y() {
            var n = Object(u.a)(["\n  background: linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.1)), url(", ");\n  height: 100vh;\n  background-position: center;\n  background-size: cover;\n"]);
            return Y = function() {
                return n
            }
            ,
            n
        }
        var q = d.b.div(Y(), _)
          , G = d.b.div(V())
          , H = d.b.div(N())
          , K = d.b.h1(L())
          , R = d.b.p(J())
          , W = d.b.button(E())
          , Q = function() {
            var n = Object(i.useState)(!1)
              , e = Object(s.a)(n, 2)
              , t = e[0]
              , c = e[1]
              , a = function() {
                c(!t)
            };
            return Object(r.jsxs)(q, {
                children: [Object(r.jsx)(v, {
                    toggle: a
                }), Object(r.jsx)(I, {
                    isOpen: t,
                    toggle: a
                }), Object(r.jsx)(G, {
                    children: Object(r.jsxs)(H, {
                        children: [Object(r.jsx)(K, {
                            children: "Greatest Pizza Ever"
                        }), Object(r.jsx)(R, {
                            children: "Ready in 10 minutes"
                        }), Object(r.jsx)(W, {
                            children: "Place Order"
                        })]
                    })
                })]
            })
        };
        function U() {
            var n = Object(u.a)(["\n  * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    font-family: 'Kanit', sans-serif;\n  }\n"]);
            return U = function() {
                return n
            }
            ,
            n
        }
        var X = Object(d.a)(U());
        function Z() {
            var n = Object(u.a)(["\n  font-size: 1rem;\n  padding: 1rem 4rem;\n  border: none;\n  background: #e31837;\n  color: #fff;\n  transition: .2s ease-out;\n\n  &:hover {\n    background: #ffc500;\n    transition: 0.2s ease-out;\n    cursor: pointer;\n    color: #000;\n  }\n"]);
            return Z = function() {
                return n
            }
            ,
            n
        }
        function nn() {
            var n = Object(u.a)(["\n  margin-bottom: 1rem;\n  font-size: 2rem;\n"]);
            return nn = function() {
                return n
            }
            ,
            n
        }
        function en() {
            var n = Object(u.a)(["\n  margin-bottom: 1rem;\n"]);
            return en = function() {
                return n
            }
            ,
            n
        }
        function tn() {
            var n = Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 2rem;\n  text-align: center;\n"]);
            return tn = function() {
                return n
            }
            ,
            n
        }
        function rn() {
            var n = Object(u.a)(["\n  font-weight: 400;\n  font-size: 1.5rem;\n"]);
            return rn = function() {
                return n
            }
            ,
            n
        }
        function cn() {
            var n = Object(u.a)(["\n  font-size: clamp(2rem, 2.5vw, 3rem);\n  text-align: center;\n  margin-bottom: 5rem;\n"]);
            return cn = function() {
                return n
            }
            ,
            n
        }
        function an() {
            var n = Object(u.a)(["\n  height: 300px;\n  min-width: 300px;\n  max-width: 100%;\n  box-shadow: 8px 8px #fdc500;\n"]);
            return an = function() {
                return n
            }
            ,
            n
        }
        function on() {
            var n = Object(u.a)(["\n  margin: 0 2rem;\n  line-height: 2;\n  width: 300px;\n"]);
            return on = function() {
                return n
            }
            ,
            n
        }
        function sn() {
            var n = Object(u.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin: 0 auto;\n"]);
            return sn = function() {
                return n
            }
            ,
            n
        }
        function un() {
            var n = Object(u.a)(["\n  width: 100vw;\n  min-height: 100vh;\n  padding: 5rem calc((100vw - 1300px) / 2);\n  background: #150f0f;\n  color: #fff;\n"]);
            return un = function() {
                return n
            }
            ,
            n
        }
        var dn = d.b.div(un())
          , bn = d.b.div(sn())
          , fn = d.b.div(on())
          , ln = d.b.img(an())
          , jn = d.b.h1(cn())
          , pn = d.b.h2(rn())
          , mn = d.b.div(tn())
          , hn = d.b.p(en())
          , xn = d.b.p(nn())
          , gn = d.b.button(Z())
          , On = function(n) {
            var e = n.heading
              , t = n.data;
            return Object(r.jsxs)(dn, {
                children: [Object(r.jsx)(jn, {
                    children: e
                }), Object(r.jsx)(bn, {
                    children: t.map((function(n, e) {
                        return Object(r.jsxs)(fn, {
                            children: [Object(r.jsx)(ln, {
                                src: n.img,
                                alt: n.alt
                            }), Object(r.jsxs)(mn, {
                                children: [Object(r.jsx)(pn, {
                                    children: n.name
                                }), Object(r.jsx)(hn, {
                                    children: n.desc
                                }), Object(r.jsx)(xn, {
                                    children: n.price
                                }), Object(r.jsx)(gn, {
                                    children: n.button
                                })]
                            })]
                        }, e)
                    }
                    ))
                })]
            })
        }
          , vn = t.p + "static/media/product-1.36d084f3.jpg"
          , wn = t.p + "static/media/product-2.4c066971.jpg"
          , zn = t.p + "static/media/product-3.115cc32b.jpg"
          , kn = t.p + "static/media/sweet3.c495c742.jpg"
          , yn = t.p + "static/media/sweet-2.d5cf1ad2.jpg"
          , Cn = t.p + "static/media/sweet-3.badeecbe.jpg"
          , Pn = [{
            img: vn,
            alt: "Pizza",
            name: "Supreme Pizza",
            desc: "Marinara sauce, basil, italian sausage, roma tomatoes, olives, and pesto",
            price: "$19.99",
            button: "Add to Cart"
        }, {
            img: wn,
            alt: "Pizza",
            name: "Hawaiian Paradise",
            desc: "Marinara sauce, basil, sliced ham, fresh pineapple",
            price: "$16.99",
            button: "Add to Cart"
        }, {
            img: zn,
            alt: "Pizza",
            name: "Veggie Overload",
            desc: "Marinara sauce, basil, bell peppers, mushrooms, sweet onion, roma tomatoes, olives, and pesto",
            price: "$14.99",
            button: "Add to Cart"
        }]
          , An = [{
            img: yn,
            alt: "Donuts",
            name: "Doughlicious",
            desc: "Belgian chocolate glazed donuts covered in icing with sprinkles on otp",
            price: "$9.99",
            button: "Add to Cart"
        }, {
            img: Cn,
            alt: "Ice Cream",
            name: "Caramel Wonder",
            desc: "Vanilla ice cream covered with caramel and chocolate glaze topped with a cocoa stick",
            price: "$12.99",
            button: "Add to Cart"
        }, {
            img: kn,
            alt: "Brownie",
            name: "Brownie Bunch",
            desc: "Double fudge brownie squares topped with white chocolate pieces and macadamia nuts",
            price: "$9.99",
            button: "Add to Cart"
        }]
          , Bn = t.p + "static/media/featured3.66d68644.jpg";
        function Dn() {
            var n = Object(u.a)(["\n  font-size: 1.4rem;\n  padding: 0.6rem 3rem;\n  border: none;\n  background: #ffc500;\n  color: #000;\n  transition: 0.2s ease-out;\n\n  &:hover {\n    color: #fff;\n    background: #e31837;\n    transition: 0.2s ease-out;\n    cursor: pointer;\n  }\n"]);
            return Dn = function() {
                return n
            }
            ,
            n
        }
        function Fn() {
            var n = Object(u.a)(["\n  background: linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.1)), url(", ");\n  height: 100vh;\n  max-height: 500px;\n  background-position: center;\n  background-size: cover;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: #fff;\n  text-align: center;\n  padding; 0 1rem;\n\n  h1 {\n    font-size: clamp(3rem, 5vw, 5rem);\n  }\n\n  p {\n    font-size: clamp(1rem, 3vw, 2rem);\n    margin-bottom: 1rem;\n  }\n"]);
            return Fn = function() {
                return n
            }
            ,
            n
        }
        var Mn = d.b.div(Fn(), Bn)
          , $n = d.b.button(Dn())
          , Sn = function() {
            return Object(r.jsxs)(Mn, {
                children: [Object(r.jsx)("h1", {
                    children: "Pizza of the Day"
                }), Object(r.jsx)("p", {
                    children: "Truffle alfredo sauce topped with 24 carat gold dust"
                }), Object(r.jsx)($n, {
                    children: "Order Now"
                })]
            })
        };
        function Tn() {
            var n = Object(u.a)(["\n  color: #fff;\n  font-size: 24px;\n"]);
            return Tn = function() {
                return n
            }
            ,
            n
        }
        function In() {
            var n = Object(u.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 240px;\n"]);
            return In = function() {
                return n
            }
            ,
            n
        }
        function _n() {
            var n = Object(u.a)(["\n  color: #fff;\n  justify-self: start;\n  cursor: pointer;\n  text-decoration: none;\n  font-size: 1.5rem;\n  display: flex;\n  align-items: center;\n  margin-bottom: 16px;\n  font-weight: bold;\n"]);
            return _n = function() {
                return n
            }
            ,
            n
        }
        function En() {
            var n = Object(u.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  max-width: 1100px;\n  margin: 16px auto 0 auto;\n\n  @media screen and (max-width: 820px) {\n    flex-direction: column;\n  }\n"]);
            return En = function() {
                return n
            }
            ,
            n
        }
        function Jn() {
            var n = Object(u.a)(["\n  max-width: 1300px;\n  width: 100%;\n"]);
            return Jn = function() {
                return n
            }
            ,
            n
        }
        function Ln() {
            var n = Object(u.a)(["\n  padding: 16px 24px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  max-width: 1300px;\n  margin: 0 auto;\n"]);
            return Ln = function() {
                return n
            }
            ,
            n
        }
        function Nn() {
            var n = Object(u.a)(["\n  background-color: #0d0909;\n"]);
            return Nn = function() {
                return n
            }
            ,
            n
        }
        var Vn = d.b.footer(Nn())
          , Yn = d.b.div(Ln())
          , qn = d.b.section(Jn())
          , Gn = d.b.div(En())
          , Hn = Object(d.b)(b.b)(_n())
          , Kn = d.b.div(In())
          , Rn = d.b.a(Tn())
          , Wn = function() {
            return Object(r.jsx)(Vn, {
                children: Object(r.jsx)(Yn, {
                    children: Object(r.jsx)(qn, {
                        children: Object(r.jsxs)(Gn, {
                            children: [Object(r.jsx)(Hn, {
                                to: "/",
                                children: "Pizza"
                            }), Object(r.jsxs)(Kn, {
                                children: [Object(r.jsx)(Rn, {
                                    href: "/",
                                    target: "_blank",
                                    "aria-label": "Facebook",
                                    rel: "noopener",
                                    noreferrer: !0,
                                    children: Object(r.jsx)(f.a, {})
                                }), Object(r.jsx)(Rn, {
                                    href: "/",
                                    target: "_blank",
                                    "aria-label": "Twitter",
                                    rel: "noopener",
                                    noreferrer: !0,
                                    children: Object(r.jsx)(f.e, {})
                                }), Object(r.jsx)(Rn, {
                                    href: "/",
                                    target: "_blank",
                                    "aria-label": "Instagram",
                                    rel: "noopener",
                                    noreferrer: !0,
                                    children: Object(r.jsx)(f.b, {})
                                }), Object(r.jsx)(Rn, {
                                    href: "/",
                                    target: "_blank",
                                    "aria-label": "Youtube",
                                    rel: "noopener",
                                    noreferrer: !0,
                                    children: Object(r.jsx)(f.f, {})
                                })]
                            })]
                        })
                    })
                })
            })
        };
        var Qn = function() {
            return Object(r.jsxs)(b.a, {
                children: [Object(r.jsx)(X, {}), Object(r.jsx)(Q, {}), Object(r.jsx)(On, {
                    heading: "Choose your favorite",
                    data: Pn
                }), Object(r.jsx)(Sn, {}), Object(r.jsx)(On, {
                    heading: "Sweet Treats for You",
                    data: An
                }), Object(r.jsx)(Wn, {})]
            })
        }
          , Un = function(n) {
            n && n instanceof Function && t.e(3).then(t.bind(null, 32)).then((function(e) {
                var t = e.getCLS
                  , r = e.getFID
                  , i = e.getFCP
                  , c = e.getLCP
                  , a = e.getTTFB;
                t(n),
                r(n),
                i(n),
                c(n),
                a(n)
            }
            ))
        };
        o.a.render(Object(r.jsx)(c.a.StrictMode, {
            children: Object(r.jsx)(Qn, {})
        }), document.getElementById("root")),
        Un()
    }
}, [[31, 1, 2]]]);
//# sourceMappingURL=main.a790b082.chunk.js.map
