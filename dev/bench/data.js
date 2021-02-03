window.BENCHMARK_DATA = {
  "lastUpdate": 1612339999099,
  "repoUrl": "https://github.com/surechen/tokio",
  "entries": {
    "sync_rwlock": [
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "distinct": true,
          "id": "af032dbf59195f5a637c14fd8805f45cce8c8563",
          "message": "try again",
          "timestamp": "2020-11-13T16:47:49-08:00",
          "tree_id": "2c351a9bf2bc6d1fb70754ee19640da3b69df204",
          "url": "https://github.com/tokio-rs/tokio/commit/af032dbf59195f5a637c14fd8805f45cce8c8563"
        },
        "date": 1605314959564,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 1019,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 14559,
            "range": "± 3929",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1045,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 14917,
            "range": "± 3866",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 589,
            "range": "± 34",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "97c2c4203cd7c42960cac895987c43a17dff052e",
          "message": "chore: automate running benchmarks (#3140)\n\nUses Github actions to run benchmarks.",
          "timestamp": "2020-11-13T19:30:52-08:00",
          "tree_id": "f4a3cfebafb7afee68d6d4de1748daddcfc070c6",
          "url": "https://github.com/tokio-rs/tokio/commit/97c2c4203cd7c42960cac895987c43a17dff052e"
        },
        "date": 1605324749506,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 924,
            "range": "± 177",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 15161,
            "range": "± 4086",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 874,
            "range": "± 176",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 14986,
            "range": "± 4366",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 493,
            "range": "± 85",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "masnagam@gmail.com",
            "name": "masnagam",
            "username": "masnagam"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4e39c9b818eb8af064bb9f45f47e3cfc6593de95",
          "message": "net: restore TcpStream::{poll_read_ready, poll_write_ready} (#2743)",
          "timestamp": "2020-11-16T09:51:06-08:00",
          "tree_id": "2222dd2f8638fb64f228badef84814d2f4079a82",
          "url": "https://github.com/tokio-rs/tokio/commit/4e39c9b818eb8af064bb9f45f47e3cfc6593de95"
        },
        "date": 1605549190558,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 1052,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 16954,
            "range": "± 8337",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1096,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 14894,
            "range": "± 2274",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 611,
            "range": "± 25",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eliza@buoyant.io",
            "name": "Eliza Weisman",
            "username": "hawkw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f5cb4c20422a35b51bfba3391744f8bcb54f7581",
          "message": "net: Add send/recv buf size methods to `TcpSocket` (#3145)\n\nThis commit adds `set_{send, recv}_buffer_size` methods to `TcpSocket`\r\nfor setting the size of the TCP send and receive buffers, and `{send,\r\nrecv}_buffer_size` methods for returning the current value. These just\r\ncall into similar methods on `mio`'s `TcpSocket` type, which were added\r\nin tokio-rs/mio#1384.\r\n\r\nRefs: #3082\r\n\r\nSigned-off-by: Eliza Weisman <eliza@buoyant.io>",
          "timestamp": "2020-11-16T12:29:03-08:00",
          "tree_id": "fcf642984a21d04533efad0cdde613d294635c4d",
          "url": "https://github.com/tokio-rs/tokio/commit/f5cb4c20422a35b51bfba3391744f8bcb54f7581"
        },
        "date": 1605558676197,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 1058,
            "range": "± 112",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 15094,
            "range": "± 3743",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1022,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 14201,
            "range": "± 3791",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 545,
            "range": "± 77",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zaharidichev@gmail.com",
            "name": "Zahari Dichev",
            "username": "zaharidichev"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d0ebb4154748166a4ba07baa4b424a1c45efd219",
          "message": "sync: add `Notify::notify_waiters` (#3098)\n\nThis PR makes `Notify::notify_waiters` public. The method\r\nalready exists, but it changes the way `notify_waiters`,\r\nis used. Previously in order for the consumer to\r\nregister interest, in a notification triggered by\r\n`notify_waiters`, the `Notified` future had to be\r\npolled. This introduced friction when using the api\r\nas the future had to be pinned before polled.\r\n\r\nThis change introduces a counter that tracks how many\r\ntimes `notified_waiters` has been called. Upon creation of\r\nthe future the number of times is loaded. When first\r\npolled the future compares this number with the count\r\nstate of the `Notify` type. This avoids the need for\r\nregistering the waiter upfront.\r\n\r\nFixes: #3066",
          "timestamp": "2020-11-16T12:49:35-08:00",
          "tree_id": "5ea4d611256290f62baea1a9ffa3333b254181df",
          "url": "https://github.com/tokio-rs/tokio/commit/d0ebb4154748166a4ba07baa4b424a1c45efd219"
        },
        "date": 1605559893134,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 981,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 15833,
            "range": "± 8715",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1067,
            "range": "± 210",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 16713,
            "range": "± 13609",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 568,
            "range": "± 131",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0ea23076503c5151d68a781a3d91823396c82949",
          "message": "net: add UdpSocket readiness and non-blocking ops (#3138)\n\nAdds `ready()`, `readable()`, and `writable()` async methods for waiting\r\nfor socket readiness. Adds `try_send`, `try_send_to`, `try_recv`, and\r\n`try_recv_from` for performing non-blocking operations on the socket.\r\n\r\nThis is the UDP equivalent of #3130.",
          "timestamp": "2020-11-16T15:44:01-08:00",
          "tree_id": "1e49d7dc0bb3cee6271133d942ba49c5971fde29",
          "url": "https://github.com/tokio-rs/tokio/commit/0ea23076503c5151d68a781a3d91823396c82949"
        },
        "date": 1605570348676,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 1005,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 13752,
            "range": "± 3698",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 927,
            "range": "± 136",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 13180,
            "range": "± 3450",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 541,
            "range": "± 63",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "9832640+zekisherif@users.noreply.github.com",
            "name": "Zeki Sherif",
            "username": "zekisherif"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7d11aa866837eea50a6f1e0ef7e24846a653cbf1",
          "message": "net: add SO_LINGER get/set to TcpStream (#3143)",
          "timestamp": "2020-11-17T09:58:00-08:00",
          "tree_id": "ca0d5edc04a29bbe6e2906c760a22908e032a4c9",
          "url": "https://github.com/tokio-rs/tokio/commit/7d11aa866837eea50a6f1e0ef7e24846a653cbf1"
        },
        "date": 1605636002716,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 905,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 15309,
            "range": "± 5774",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 954,
            "range": "± 138",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 15280,
            "range": "± 6096",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 523,
            "range": "± 80",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "34fcef258b84d17f8d418b39eb61fa07fa87c390",
          "message": "io: add vectored writes to `AsyncWrite` (#3149)\n\nThis adds `AsyncWrite::poll_write_vectored`, and implements it for\r\n`TcpStream` and `UnixStream`.\r\n\r\nRefs: #3135.",
          "timestamp": "2020-11-18T10:41:47-08:00",
          "tree_id": "98e37fc2d6fa541a9e499331df86ba3d1b7b6e3a",
          "url": "https://github.com/tokio-rs/tokio/commit/34fcef258b84d17f8d418b39eb61fa07fa87c390"
        },
        "date": 1605725012703,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 913,
            "range": "± 127",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 14214,
            "range": "± 4731",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 922,
            "range": "± 161",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 15159,
            "range": "± 5870",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 487,
            "range": "± 100",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "479c545c20b2cb44a8f09600733adc8c8dcb5aa0",
          "message": "chore: prepare v0.3.4 release (#3152)",
          "timestamp": "2020-11-18T12:38:13-08:00",
          "tree_id": "df6daba6b2f595de47ada2dd2f518475669ab919",
          "url": "https://github.com/tokio-rs/tokio/commit/479c545c20b2cb44a8f09600733adc8c8dcb5aa0"
        },
        "date": 1605731980234,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 751,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 12495,
            "range": "± 3795",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 821,
            "range": "± 170",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 12921,
            "range": "± 4051",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 471,
            "range": "± 120",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "49abfdb2ac7f564c638ef99b973b1ab7a2b7ec84",
          "message": "util: fix typo in udp/frame.rs (#3154)",
          "timestamp": "2020-11-20T15:06:14+09:00",
          "tree_id": "f09954c70e26336bdb1bc525f832916c2d7037bf",
          "url": "https://github.com/tokio-rs/tokio/commit/49abfdb2ac7f564c638ef99b973b1ab7a2b7ec84"
        },
        "date": 1605852495335,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 1026,
            "range": "± 197",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 17561,
            "range": "± 5098",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1069,
            "range": "± 373",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 16640,
            "range": "± 8681",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 554,
            "range": "± 107",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eliza@buoyant.io",
            "name": "Eliza Weisman",
            "username": "hawkw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f927f01a34d7cedf0cdc820f729a7a6cd56e83dd",
          "message": "macros: fix rustfmt on 1.48.0 (#3160)\n\n## Motivation\r\n\r\nLooks like the Rust 1.48.0 version of `rustfmt` changed some formatting\r\nrules (fixed some bugs?), and some of the code in `tokio-macros` is no\r\nlonger correctly formatted. This is breaking CI.\r\n\r\n## Solution\r\n\r\nThis commit runs rustfmt on Rust 1.48.0. This fixes CI.\r\n\r\nCloses #3158",
          "timestamp": "2020-11-20T10:19:26-08:00",
          "tree_id": "bd0243a653ee49cfc50bf61b00a36cc0fce6a414",
          "url": "https://github.com/tokio-rs/tokio/commit/f927f01a34d7cedf0cdc820f729a7a6cd56e83dd"
        },
        "date": 1605896461076,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 851,
            "range": "± 162",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 13799,
            "range": "± 2696",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 869,
            "range": "± 153",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 14280,
            "range": "± 5421",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 493,
            "range": "± 69",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bdonlan@gmail.com",
            "name": "bdonlan",
            "username": "bdonlan"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ae67851f11b7cc1f577de8ce21767ce3e2c7aff9",
          "message": "time: use intrusive lists for timer tracking (#3080)\n\nMore-or-less a half-rewrite of the current time driver, supporting the\r\nuse of intrusive futures for timer registration.\r\n\r\nFixes: #3028, #3069",
          "timestamp": "2020-11-23T10:42:50-08:00",
          "tree_id": "be43cb76333b0e9e42a101d659f9b2e41555d779",
          "url": "https://github.com/tokio-rs/tokio/commit/ae67851f11b7cc1f577de8ce21767ce3e2c7aff9"
        },
        "date": 1606157082296,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 1046,
            "range": "± 167",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 16129,
            "range": "± 5605",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1047,
            "range": "± 181",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 16263,
            "range": "± 5265",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 596,
            "range": "± 88",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "driftluo@foxmail.com",
            "name": "漂流",
            "username": "driftluo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "874fc3320bc000fee20d63b3ad865a1145122640",
          "message": "codec: add read_buffer_mut to FramedRead (#3166)",
          "timestamp": "2020-11-24T09:39:16+01:00",
          "tree_id": "53540b744f6a915cedc1099afe1b0639443b2436",
          "url": "https://github.com/tokio-rs/tokio/commit/874fc3320bc000fee20d63b3ad865a1145122640"
        },
        "date": 1606207265360,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 978,
            "range": "± 169",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 16567,
            "range": "± 9827",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1027,
            "range": "± 238",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 15815,
            "range": "± 6190",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 564,
            "range": "± 138",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github@max.sharnoff.org",
            "name": "Max Sharnoff",
            "username": "sharnoff"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "de33ee85ce61377b316b630e4355d419cc4abcb7",
          "message": "time: replace 'ouClockTimeide' in internal docs with 'outside' (#3171)",
          "timestamp": "2020-11-24T10:23:20+01:00",
          "tree_id": "5ed85f95ea1846983471a11fe555328e6b0f5f6f",
          "url": "https://github.com/tokio-rs/tokio/commit/de33ee85ce61377b316b630e4355d419cc4abcb7"
        },
        "date": 1606209917511,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 1007,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 14652,
            "range": "± 3659",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1008,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 14781,
            "range": "± 3706",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 584,
            "range": "± 41",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rajiv.chauhan@gmail.com",
            "name": "Rajiv Chauhan",
            "username": "chauhraj"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5e406a7a47699d93fa2a77fb72553600cb7abd0f",
          "message": "macros: fix outdated documentation (#3180)\n\n1. Changed 0.2 to 0.3\r\n2. Changed ‘multi’ to ‘single’ to indicate that the behavior is single threaded",
          "timestamp": "2020-11-26T19:46:15+01:00",
          "tree_id": "ac6898684e4b84e4a5d0e781adf42d950bbc9e43",
          "url": "https://github.com/tokio-rs/tokio/commit/5e406a7a47699d93fa2a77fb72553600cb7abd0f"
        },
        "date": 1606416464334,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 840,
            "range": "± 145",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 13525,
            "range": "± 4041",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 909,
            "range": "± 280",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 12807,
            "range": "± 2584",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 511,
            "range": "± 100",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "heng@cantab.net",
            "name": "Henry Gomersall",
            "username": "hgomersall"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5402c948eebbb4c6c695e156d68ce495a43ea81a",
          "message": "io: clarify AsyncFd docs about changes of the inner fd (#3430)",
          "timestamp": "2021-01-17T21:39:58+01:00",
          "tree_id": "63ed16dcd34c11314b7bda2dcb983946b5669a1e",
          "url": "https://github.com/surechen/tokio/commit/5402c948eebbb4c6c695e156d68ce495a43ea81a"
        },
        "date": 1611020519088,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 837,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 13286,
            "range": "± 2708",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 873,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 13554,
            "range": "± 2671",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 496,
            "range": "± 14",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alice@ryhl.io",
            "name": "Alice Ryhl",
            "username": "Darksonn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c6f08120d0e8764f5ff4d474ded342c85d9b188d",
          "message": "task: add LocalSet example (#3438)",
          "timestamp": "2021-01-21T16:36:26+01:00",
          "tree_id": "dfc6d5e2eb2113d89db0940b1517833cb30a745f",
          "url": "https://github.com/surechen/tokio/commit/c6f08120d0e8764f5ff4d474ded342c85d9b188d"
        },
        "date": 1611300446603,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 951,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 14946,
            "range": "± 4821",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 991,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 15238,
            "range": "± 3372",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 549,
            "range": "± 52",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "artem@vorotnikov.me",
            "name": "Artem Vorotnikov",
            "username": "vorot93"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cc97fb8a5ff6ef17f6dc9968fbbe67002cff4130",
          "message": "Suppress deprecated warnings for spin_loop_hint (#3497)\n\n* Suppress deprecated warnings for spin_loop_hint\n\n* Update tokio/src/loom/std/mod.rs\n\nCo-authored-by: Taiki Endo <te316e89@gmail.com>\n\n* Update tokio/src/sync/task/atomic_waker.rs\n\nCo-authored-by: Taiki Endo <te316e89@gmail.com>\n\n* fmt\n\nCo-authored-by: Taiki Endo <te316e89@gmail.com>",
          "timestamp": "2021-02-01T15:55:21+03:00",
          "tree_id": "effd8bf970f9044cf0ebe0b3cd8446b297b3efc8",
          "url": "https://github.com/surechen/tokio/commit/cc97fb8a5ff6ef17f6dc9968fbbe67002cff4130"
        },
        "date": 1612339998337,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 887,
            "range": "± 146",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 13741,
            "range": "± 5383",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 950,
            "range": "± 133",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 13901,
            "range": "± 4246",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 551,
            "range": "± 91",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "rt_multi_threaded": [
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "distinct": true,
          "id": "af032dbf59195f5a637c14fd8805f45cce8c8563",
          "message": "try again",
          "timestamp": "2020-11-13T16:47:49-08:00",
          "tree_id": "2c351a9bf2bc6d1fb70754ee19640da3b69df204",
          "url": "https://github.com/tokio-rs/tokio/commit/af032dbf59195f5a637c14fd8805f45cce8c8563"
        },
        "date": 1605314974927,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 199046,
            "range": "± 55572",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 760862,
            "range": "± 157394",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5490742,
            "range": "± 748448",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 20486755,
            "range": "± 2300375",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "97c2c4203cd7c42960cac895987c43a17dff052e",
          "message": "chore: automate running benchmarks (#3140)\n\nUses Github actions to run benchmarks.",
          "timestamp": "2020-11-13T19:30:52-08:00",
          "tree_id": "f4a3cfebafb7afee68d6d4de1748daddcfc070c6",
          "url": "https://github.com/tokio-rs/tokio/commit/97c2c4203cd7c42960cac895987c43a17dff052e"
        },
        "date": 1605324750921,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 178128,
            "range": "± 14270",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 707946,
            "range": "± 48048",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5326109,
            "range": "± 635423",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 19949182,
            "range": "± 3024767",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "masnagam@gmail.com",
            "name": "masnagam",
            "username": "masnagam"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4e39c9b818eb8af064bb9f45f47e3cfc6593de95",
          "message": "net: restore TcpStream::{poll_read_ready, poll_write_ready} (#2743)",
          "timestamp": "2020-11-16T09:51:06-08:00",
          "tree_id": "2222dd2f8638fb64f228badef84814d2f4079a82",
          "url": "https://github.com/tokio-rs/tokio/commit/4e39c9b818eb8af064bb9f45f47e3cfc6593de95"
        },
        "date": 1605549203912,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 182327,
            "range": "± 35912",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 649727,
            "range": "± 102719",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 4047012,
            "range": "± 839128",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 18946145,
            "range": "± 2027569",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eliza@buoyant.io",
            "name": "Eliza Weisman",
            "username": "hawkw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f5cb4c20422a35b51bfba3391744f8bcb54f7581",
          "message": "net: Add send/recv buf size methods to `TcpSocket` (#3145)\n\nThis commit adds `set_{send, recv}_buffer_size` methods to `TcpSocket`\r\nfor setting the size of the TCP send and receive buffers, and `{send,\r\nrecv}_buffer_size` methods for returning the current value. These just\r\ncall into similar methods on `mio`'s `TcpSocket` type, which were added\r\nin tokio-rs/mio#1384.\r\n\r\nRefs: #3082\r\n\r\nSigned-off-by: Eliza Weisman <eliza@buoyant.io>",
          "timestamp": "2020-11-16T12:29:03-08:00",
          "tree_id": "fcf642984a21d04533efad0cdde613d294635c4d",
          "url": "https://github.com/tokio-rs/tokio/commit/f5cb4c20422a35b51bfba3391744f8bcb54f7581"
        },
        "date": 1605558645947,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 191217,
            "range": "± 14072",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 710720,
            "range": "± 43091",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5226983,
            "range": "± 533736",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 19521931,
            "range": "± 2271038",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zaharidichev@gmail.com",
            "name": "Zahari Dichev",
            "username": "zaharidichev"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d0ebb4154748166a4ba07baa4b424a1c45efd219",
          "message": "sync: add `Notify::notify_waiters` (#3098)\n\nThis PR makes `Notify::notify_waiters` public. The method\r\nalready exists, but it changes the way `notify_waiters`,\r\nis used. Previously in order for the consumer to\r\nregister interest, in a notification triggered by\r\n`notify_waiters`, the `Notified` future had to be\r\npolled. This introduced friction when using the api\r\nas the future had to be pinned before polled.\r\n\r\nThis change introduces a counter that tracks how many\r\ntimes `notified_waiters` has been called. Upon creation of\r\nthe future the number of times is loaded. When first\r\npolled the future compares this number with the count\r\nstate of the `Notify` type. This avoids the need for\r\nregistering the waiter upfront.\r\n\r\nFixes: #3066",
          "timestamp": "2020-11-16T12:49:35-08:00",
          "tree_id": "5ea4d611256290f62baea1a9ffa3333b254181df",
          "url": "https://github.com/tokio-rs/tokio/commit/d0ebb4154748166a4ba07baa4b424a1c45efd219"
        },
        "date": 1605559892943,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 191688,
            "range": "± 39550",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 724625,
            "range": "± 52874",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5279089,
            "range": "± 569953",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 21143658,
            "range": "± 1850531",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0ea23076503c5151d68a781a3d91823396c82949",
          "message": "net: add UdpSocket readiness and non-blocking ops (#3138)\n\nAdds `ready()`, `readable()`, and `writable()` async methods for waiting\r\nfor socket readiness. Adds `try_send`, `try_send_to`, `try_recv`, and\r\n`try_recv_from` for performing non-blocking operations on the socket.\r\n\r\nThis is the UDP equivalent of #3130.",
          "timestamp": "2020-11-16T15:44:01-08:00",
          "tree_id": "1e49d7dc0bb3cee6271133d942ba49c5971fde29",
          "url": "https://github.com/tokio-rs/tokio/commit/0ea23076503c5151d68a781a3d91823396c82949"
        },
        "date": 1605570348602,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 179160,
            "range": "± 73737",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 618494,
            "range": "± 150449",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 4766918,
            "range": "± 1107083",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 19012569,
            "range": "± 4448367",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "9832640+zekisherif@users.noreply.github.com",
            "name": "Zeki Sherif",
            "username": "zekisherif"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7d11aa866837eea50a6f1e0ef7e24846a653cbf1",
          "message": "net: add SO_LINGER get/set to TcpStream (#3143)",
          "timestamp": "2020-11-17T09:58:00-08:00",
          "tree_id": "ca0d5edc04a29bbe6e2906c760a22908e032a4c9",
          "url": "https://github.com/tokio-rs/tokio/commit/7d11aa866837eea50a6f1e0ef7e24846a653cbf1"
        },
        "date": 1605636009065,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 214451,
            "range": "± 25711",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 790044,
            "range": "± 167979",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5645160,
            "range": "± 704481",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 22209149,
            "range": "± 3825346",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "34fcef258b84d17f8d418b39eb61fa07fa87c390",
          "message": "io: add vectored writes to `AsyncWrite` (#3149)\n\nThis adds `AsyncWrite::poll_write_vectored`, and implements it for\r\n`TcpStream` and `UnixStream`.\r\n\r\nRefs: #3135.",
          "timestamp": "2020-11-18T10:41:47-08:00",
          "tree_id": "98e37fc2d6fa541a9e499331df86ba3d1b7b6e3a",
          "url": "https://github.com/tokio-rs/tokio/commit/34fcef258b84d17f8d418b39eb61fa07fa87c390"
        },
        "date": 1605725037410,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 208313,
            "range": "± 45110",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 736590,
            "range": "± 151516",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5234403,
            "range": "± 831789",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 20304040,
            "range": "± 2144433",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "479c545c20b2cb44a8f09600733adc8c8dcb5aa0",
          "message": "chore: prepare v0.3.4 release (#3152)",
          "timestamp": "2020-11-18T12:38:13-08:00",
          "tree_id": "df6daba6b2f595de47ada2dd2f518475669ab919",
          "url": "https://github.com/tokio-rs/tokio/commit/479c545c20b2cb44a8f09600733adc8c8dcb5aa0"
        },
        "date": 1605732017041,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 195866,
            "range": "± 16539",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 727582,
            "range": "± 199697",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5428466,
            "range": "± 908457",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 20820491,
            "range": "± 4055596",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "49abfdb2ac7f564c638ef99b973b1ab7a2b7ec84",
          "message": "util: fix typo in udp/frame.rs (#3154)",
          "timestamp": "2020-11-20T15:06:14+09:00",
          "tree_id": "f09954c70e26336bdb1bc525f832916c2d7037bf",
          "url": "https://github.com/tokio-rs/tokio/commit/49abfdb2ac7f564c638ef99b973b1ab7a2b7ec84"
        },
        "date": 1605852489821,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 189192,
            "range": "± 8967",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 702064,
            "range": "± 44051",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5500810,
            "range": "± 1053690",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 20865377,
            "range": "± 2857375",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eliza@buoyant.io",
            "name": "Eliza Weisman",
            "username": "hawkw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f927f01a34d7cedf0cdc820f729a7a6cd56e83dd",
          "message": "macros: fix rustfmt on 1.48.0 (#3160)\n\n## Motivation\r\n\r\nLooks like the Rust 1.48.0 version of `rustfmt` changed some formatting\r\nrules (fixed some bugs?), and some of the code in `tokio-macros` is no\r\nlonger correctly formatted. This is breaking CI.\r\n\r\n## Solution\r\n\r\nThis commit runs rustfmt on Rust 1.48.0. This fixes CI.\r\n\r\nCloses #3158",
          "timestamp": "2020-11-20T10:19:26-08:00",
          "tree_id": "bd0243a653ee49cfc50bf61b00a36cc0fce6a414",
          "url": "https://github.com/tokio-rs/tokio/commit/f927f01a34d7cedf0cdc820f729a7a6cd56e83dd"
        },
        "date": 1605896473214,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 194070,
            "range": "± 27873",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 694259,
            "range": "± 87017",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5250419,
            "range": "± 1213331",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 19153793,
            "range": "± 2780219",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bdonlan@gmail.com",
            "name": "bdonlan",
            "username": "bdonlan"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ae67851f11b7cc1f577de8ce21767ce3e2c7aff9",
          "message": "time: use intrusive lists for timer tracking (#3080)\n\nMore-or-less a half-rewrite of the current time driver, supporting the\r\nuse of intrusive futures for timer registration.\r\n\r\nFixes: #3028, #3069",
          "timestamp": "2020-11-23T10:42:50-08:00",
          "tree_id": "be43cb76333b0e9e42a101d659f9b2e41555d779",
          "url": "https://github.com/tokio-rs/tokio/commit/ae67851f11b7cc1f577de8ce21767ce3e2c7aff9"
        },
        "date": 1606157070461,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 173680,
            "range": "± 53274",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 657451,
            "range": "± 137368",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 4540370,
            "range": "± 688983",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 18223628,
            "range": "± 2718440",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "driftluo@foxmail.com",
            "name": "漂流",
            "username": "driftluo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "874fc3320bc000fee20d63b3ad865a1145122640",
          "message": "codec: add read_buffer_mut to FramedRead (#3166)",
          "timestamp": "2020-11-24T09:39:16+01:00",
          "tree_id": "53540b744f6a915cedc1099afe1b0639443b2436",
          "url": "https://github.com/tokio-rs/tokio/commit/874fc3320bc000fee20d63b3ad865a1145122640"
        },
        "date": 1606207270323,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 189797,
            "range": "± 31752",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 715813,
            "range": "± 109946",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5154978,
            "range": "± 1056989",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 20258373,
            "range": "± 2845256",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github@max.sharnoff.org",
            "name": "Max Sharnoff",
            "username": "sharnoff"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "de33ee85ce61377b316b630e4355d419cc4abcb7",
          "message": "time: replace 'ouClockTimeide' in internal docs with 'outside' (#3171)",
          "timestamp": "2020-11-24T10:23:20+01:00",
          "tree_id": "5ed85f95ea1846983471a11fe555328e6b0f5f6f",
          "url": "https://github.com/tokio-rs/tokio/commit/de33ee85ce61377b316b630e4355d419cc4abcb7"
        },
        "date": 1606209893658,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 165011,
            "range": "± 21067",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 627437,
            "range": "± 58843",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5240104,
            "range": "± 1229941",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 18931567,
            "range": "± 3824387",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rajiv.chauhan@gmail.com",
            "name": "Rajiv Chauhan",
            "username": "chauhraj"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5e406a7a47699d93fa2a77fb72553600cb7abd0f",
          "message": "macros: fix outdated documentation (#3180)\n\n1. Changed 0.2 to 0.3\r\n2. Changed ‘multi’ to ‘single’ to indicate that the behavior is single threaded",
          "timestamp": "2020-11-26T19:46:15+01:00",
          "tree_id": "ac6898684e4b84e4a5d0e781adf42d950bbc9e43",
          "url": "https://github.com/tokio-rs/tokio/commit/5e406a7a47699d93fa2a77fb72553600cb7abd0f"
        },
        "date": 1606416482206,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 178594,
            "range": "± 14184",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 675232,
            "range": "± 139132",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 4452171,
            "range": "± 763665",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 19263524,
            "range": "± 2608454",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "heng@cantab.net",
            "name": "Henry Gomersall",
            "username": "hgomersall"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5402c948eebbb4c6c695e156d68ce495a43ea81a",
          "message": "io: clarify AsyncFd docs about changes of the inner fd (#3430)",
          "timestamp": "2021-01-17T21:39:58+01:00",
          "tree_id": "63ed16dcd34c11314b7bda2dcb983946b5669a1e",
          "url": "https://github.com/surechen/tokio/commit/5402c948eebbb4c6c695e156d68ce495a43ea81a"
        },
        "date": 1611020528604,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 188737,
            "range": "± 43328",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 678408,
            "range": "± 141863",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 4940045,
            "range": "± 1048800",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 18496474,
            "range": "± 3330752",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alice@ryhl.io",
            "name": "Alice Ryhl",
            "username": "Darksonn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c6f08120d0e8764f5ff4d474ded342c85d9b188d",
          "message": "task: add LocalSet example (#3438)",
          "timestamp": "2021-01-21T16:36:26+01:00",
          "tree_id": "dfc6d5e2eb2113d89db0940b1517833cb30a745f",
          "url": "https://github.com/surechen/tokio/commit/c6f08120d0e8764f5ff4d474ded342c85d9b188d"
        },
        "date": 1611300430829,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 168773,
            "range": "± 32488",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 666601,
            "range": "± 131375",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 4791720,
            "range": "± 950726",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 18462259,
            "range": "± 2752080",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "sync_semaphore": [
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "distinct": true,
          "id": "af032dbf59195f5a637c14fd8805f45cce8c8563",
          "message": "try again",
          "timestamp": "2020-11-13T16:47:49-08:00",
          "tree_id": "2c351a9bf2bc6d1fb70754ee19640da3b69df204",
          "url": "https://github.com/tokio-rs/tokio/commit/af032dbf59195f5a637c14fd8805f45cce8c8563"
        },
        "date": 1605314979788,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 13595,
            "range": "± 2805",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 916,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 548,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 13431,
            "range": "± 2349",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 916,
            "range": "± 6",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "97c2c4203cd7c42960cac895987c43a17dff052e",
          "message": "chore: automate running benchmarks (#3140)\n\nUses Github actions to run benchmarks.",
          "timestamp": "2020-11-13T19:30:52-08:00",
          "tree_id": "f4a3cfebafb7afee68d6d4de1748daddcfc070c6",
          "url": "https://github.com/tokio-rs/tokio/commit/97c2c4203cd7c42960cac895987c43a17dff052e"
        },
        "date": 1605324754941,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 13492,
            "range": "± 3133",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 950,
            "range": "± 224",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 611,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 13849,
            "range": "± 3588",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 956,
            "range": "± 196",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "masnagam@gmail.com",
            "name": "masnagam",
            "username": "masnagam"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4e39c9b818eb8af064bb9f45f47e3cfc6593de95",
          "message": "net: restore TcpStream::{poll_read_ready, poll_write_ready} (#2743)",
          "timestamp": "2020-11-16T09:51:06-08:00",
          "tree_id": "2222dd2f8638fb64f228badef84814d2f4079a82",
          "url": "https://github.com/tokio-rs/tokio/commit/4e39c9b818eb8af064bb9f45f47e3cfc6593de95"
        },
        "date": 1605549191489,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 15074,
            "range": "± 3954",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1104,
            "range": "± 143",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 639,
            "range": "± 131",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 15715,
            "range": "± 5843",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1077,
            "range": "± 260",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eliza@buoyant.io",
            "name": "Eliza Weisman",
            "username": "hawkw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f5cb4c20422a35b51bfba3391744f8bcb54f7581",
          "message": "net: Add send/recv buf size methods to `TcpSocket` (#3145)\n\nThis commit adds `set_{send, recv}_buffer_size` methods to `TcpSocket`\r\nfor setting the size of the TCP send and receive buffers, and `{send,\r\nrecv}_buffer_size` methods for returning the current value. These just\r\ncall into similar methods on `mio`'s `TcpSocket` type, which were added\r\nin tokio-rs/mio#1384.\r\n\r\nRefs: #3082\r\n\r\nSigned-off-by: Eliza Weisman <eliza@buoyant.io>",
          "timestamp": "2020-11-16T12:29:03-08:00",
          "tree_id": "fcf642984a21d04533efad0cdde613d294635c4d",
          "url": "https://github.com/tokio-rs/tokio/commit/f5cb4c20422a35b51bfba3391744f8bcb54f7581"
        },
        "date": 1605558672781,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 16250,
            "range": "± 6549",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1148,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 642,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 16877,
            "range": "± 5879",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1120,
            "range": "± 177",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zaharidichev@gmail.com",
            "name": "Zahari Dichev",
            "username": "zaharidichev"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d0ebb4154748166a4ba07baa4b424a1c45efd219",
          "message": "sync: add `Notify::notify_waiters` (#3098)\n\nThis PR makes `Notify::notify_waiters` public. The method\r\nalready exists, but it changes the way `notify_waiters`,\r\nis used. Previously in order for the consumer to\r\nregister interest, in a notification triggered by\r\n`notify_waiters`, the `Notified` future had to be\r\npolled. This introduced friction when using the api\r\nas the future had to be pinned before polled.\r\n\r\nThis change introduces a counter that tracks how many\r\ntimes `notified_waiters` has been called. Upon creation of\r\nthe future the number of times is loaded. When first\r\npolled the future compares this number with the count\r\nstate of the `Notify` type. This avoids the need for\r\nregistering the waiter upfront.\r\n\r\nFixes: #3066",
          "timestamp": "2020-11-16T12:49:35-08:00",
          "tree_id": "5ea4d611256290f62baea1a9ffa3333b254181df",
          "url": "https://github.com/tokio-rs/tokio/commit/d0ebb4154748166a4ba07baa4b424a1c45efd219"
        },
        "date": 1605559887160,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 14761,
            "range": "± 6659",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1111,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 572,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 14899,
            "range": "± 6462",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1040,
            "range": "± 180",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0ea23076503c5151d68a781a3d91823396c82949",
          "message": "net: add UdpSocket readiness and non-blocking ops (#3138)\n\nAdds `ready()`, `readable()`, and `writable()` async methods for waiting\r\nfor socket readiness. Adds `try_send`, `try_send_to`, `try_recv`, and\r\n`try_recv_from` for performing non-blocking operations on the socket.\r\n\r\nThis is the UDP equivalent of #3130.",
          "timestamp": "2020-11-16T15:44:01-08:00",
          "tree_id": "1e49d7dc0bb3cee6271133d942ba49c5971fde29",
          "url": "https://github.com/tokio-rs/tokio/commit/0ea23076503c5151d68a781a3d91823396c82949"
        },
        "date": 1605570353023,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 17403,
            "range": "± 5100",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1046,
            "range": "± 157",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 596,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 17072,
            "range": "± 5572",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1016,
            "range": "± 97",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "9832640+zekisherif@users.noreply.github.com",
            "name": "Zeki Sherif",
            "username": "zekisherif"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7d11aa866837eea50a6f1e0ef7e24846a653cbf1",
          "message": "net: add SO_LINGER get/set to TcpStream (#3143)",
          "timestamp": "2020-11-17T09:58:00-08:00",
          "tree_id": "ca0d5edc04a29bbe6e2906c760a22908e032a4c9",
          "url": "https://github.com/tokio-rs/tokio/commit/7d11aa866837eea50a6f1e0ef7e24846a653cbf1"
        },
        "date": 1605635995329,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 14052,
            "range": "± 2557",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1066,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 635,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 14784,
            "range": "± 3824",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1064,
            "range": "± 97",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "34fcef258b84d17f8d418b39eb61fa07fa87c390",
          "message": "io: add vectored writes to `AsyncWrite` (#3149)\n\nThis adds `AsyncWrite::poll_write_vectored`, and implements it for\r\n`TcpStream` and `UnixStream`.\r\n\r\nRefs: #3135.",
          "timestamp": "2020-11-18T10:41:47-08:00",
          "tree_id": "98e37fc2d6fa541a9e499331df86ba3d1b7b6e3a",
          "url": "https://github.com/tokio-rs/tokio/commit/34fcef258b84d17f8d418b39eb61fa07fa87c390"
        },
        "date": 1605725013037,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 16289,
            "range": "± 6362",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1138,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 641,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 14883,
            "range": "± 4548",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1141,
            "range": "± 5",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "479c545c20b2cb44a8f09600733adc8c8dcb5aa0",
          "message": "chore: prepare v0.3.4 release (#3152)",
          "timestamp": "2020-11-18T12:38:13-08:00",
          "tree_id": "df6daba6b2f595de47ada2dd2f518475669ab919",
          "url": "https://github.com/tokio-rs/tokio/commit/479c545c20b2cb44a8f09600733adc8c8dcb5aa0"
        },
        "date": 1605732024626,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 15022,
            "range": "± 5746",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1023,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 610,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 14804,
            "range": "± 4029",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1050,
            "range": "± 109",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "49abfdb2ac7f564c638ef99b973b1ab7a2b7ec84",
          "message": "util: fix typo in udp/frame.rs (#3154)",
          "timestamp": "2020-11-20T15:06:14+09:00",
          "tree_id": "f09954c70e26336bdb1bc525f832916c2d7037bf",
          "url": "https://github.com/tokio-rs/tokio/commit/49abfdb2ac7f564c638ef99b973b1ab7a2b7ec84"
        },
        "date": 1605852504046,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 15976,
            "range": "± 6358",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1140,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 657,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 16059,
            "range": "± 4105",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1126,
            "range": "± 127",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eliza@buoyant.io",
            "name": "Eliza Weisman",
            "username": "hawkw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f927f01a34d7cedf0cdc820f729a7a6cd56e83dd",
          "message": "macros: fix rustfmt on 1.48.0 (#3160)\n\n## Motivation\r\n\r\nLooks like the Rust 1.48.0 version of `rustfmt` changed some formatting\r\nrules (fixed some bugs?), and some of the code in `tokio-macros` is no\r\nlonger correctly formatted. This is breaking CI.\r\n\r\n## Solution\r\n\r\nThis commit runs rustfmt on Rust 1.48.0. This fixes CI.\r\n\r\nCloses #3158",
          "timestamp": "2020-11-20T10:19:26-08:00",
          "tree_id": "bd0243a653ee49cfc50bf61b00a36cc0fce6a414",
          "url": "https://github.com/tokio-rs/tokio/commit/f927f01a34d7cedf0cdc820f729a7a6cd56e83dd"
        },
        "date": 1605896460411,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 19438,
            "range": "± 3548",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 774,
            "range": "± 232",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 504,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 18618,
            "range": "± 5481",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 886,
            "range": "± 362",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bdonlan@gmail.com",
            "name": "bdonlan",
            "username": "bdonlan"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ae67851f11b7cc1f577de8ce21767ce3e2c7aff9",
          "message": "time: use intrusive lists for timer tracking (#3080)\n\nMore-or-less a half-rewrite of the current time driver, supporting the\r\nuse of intrusive futures for timer registration.\r\n\r\nFixes: #3028, #3069",
          "timestamp": "2020-11-23T10:42:50-08:00",
          "tree_id": "be43cb76333b0e9e42a101d659f9b2e41555d779",
          "url": "https://github.com/tokio-rs/tokio/commit/ae67851f11b7cc1f577de8ce21767ce3e2c7aff9"
        },
        "date": 1606157091611,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 17111,
            "range": "± 8658",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1156,
            "range": "± 114",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 665,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 16969,
            "range": "± 6320",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1131,
            "range": "± 108",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "driftluo@foxmail.com",
            "name": "漂流",
            "username": "driftluo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "874fc3320bc000fee20d63b3ad865a1145122640",
          "message": "codec: add read_buffer_mut to FramedRead (#3166)",
          "timestamp": "2020-11-24T09:39:16+01:00",
          "tree_id": "53540b744f6a915cedc1099afe1b0639443b2436",
          "url": "https://github.com/tokio-rs/tokio/commit/874fc3320bc000fee20d63b3ad865a1145122640"
        },
        "date": 1606207245207,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 15902,
            "range": "± 5794",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1117,
            "range": "± 220",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 651,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 15835,
            "range": "± 4875",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1096,
            "range": "± 196",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github@max.sharnoff.org",
            "name": "Max Sharnoff",
            "username": "sharnoff"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "de33ee85ce61377b316b630e4355d419cc4abcb7",
          "message": "time: replace 'ouClockTimeide' in internal docs with 'outside' (#3171)",
          "timestamp": "2020-11-24T10:23:20+01:00",
          "tree_id": "5ed85f95ea1846983471a11fe555328e6b0f5f6f",
          "url": "https://github.com/tokio-rs/tokio/commit/de33ee85ce61377b316b630e4355d419cc4abcb7"
        },
        "date": 1606209884612,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 14402,
            "range": "± 2947",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 907,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 542,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 14025,
            "range": "± 2005",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 906,
            "range": "± 3",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rajiv.chauhan@gmail.com",
            "name": "Rajiv Chauhan",
            "username": "chauhraj"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5e406a7a47699d93fa2a77fb72553600cb7abd0f",
          "message": "macros: fix outdated documentation (#3180)\n\n1. Changed 0.2 to 0.3\r\n2. Changed ‘multi’ to ‘single’ to indicate that the behavior is single threaded",
          "timestamp": "2020-11-26T19:46:15+01:00",
          "tree_id": "ac6898684e4b84e4a5d0e781adf42d950bbc9e43",
          "url": "https://github.com/tokio-rs/tokio/commit/5e406a7a47699d93fa2a77fb72553600cb7abd0f"
        },
        "date": 1606416464760,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 15834,
            "range": "± 4146",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1092,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 655,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 16618,
            "range": "± 5810",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1091,
            "range": "± 7",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "heng@cantab.net",
            "name": "Henry Gomersall",
            "username": "hgomersall"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5402c948eebbb4c6c695e156d68ce495a43ea81a",
          "message": "io: clarify AsyncFd docs about changes of the inner fd (#3430)",
          "timestamp": "2021-01-17T21:39:58+01:00",
          "tree_id": "63ed16dcd34c11314b7bda2dcb983946b5669a1e",
          "url": "https://github.com/surechen/tokio/commit/5402c948eebbb4c6c695e156d68ce495a43ea81a"
        },
        "date": 1611020543713,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 18558,
            "range": "± 6594",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1160,
            "range": "± 119",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 686,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 17861,
            "range": "± 12107",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1163,
            "range": "± 266",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alice@ryhl.io",
            "name": "Alice Ryhl",
            "username": "Darksonn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c6f08120d0e8764f5ff4d474ded342c85d9b188d",
          "message": "task: add LocalSet example (#3438)",
          "timestamp": "2021-01-21T16:36:26+01:00",
          "tree_id": "dfc6d5e2eb2113d89db0940b1517833cb30a745f",
          "url": "https://github.com/surechen/tokio/commit/c6f08120d0e8764f5ff4d474ded342c85d9b188d"
        },
        "date": 1611300431112,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 17039,
            "range": "± 8368",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1089,
            "range": "± 192",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 655,
            "range": "± 137",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 15340,
            "range": "± 5092",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1090,
            "range": "± 78",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "sync_mpsc": [
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "distinct": true,
          "id": "af032dbf59195f5a637c14fd8805f45cce8c8563",
          "message": "try again",
          "timestamp": "2020-11-13T16:47:49-08:00",
          "tree_id": "2c351a9bf2bc6d1fb70754ee19640da3b69df204",
          "url": "https://github.com/tokio-rs/tokio/commit/af032dbf59195f5a637c14fd8805f45cce8c8563"
        },
        "date": 1605314997643,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6701051,
            "range": "± 1798407",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6357946,
            "range": "± 1969273",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6190077,
            "range": "± 1989686",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 588,
            "range": "± 135",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 645,
            "range": "± 683",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 604,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 48623,
            "range": "± 4125",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 901,
            "range": "± 154",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1057858,
            "range": "± 197528",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 768305,
            "range": "± 105579",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "97c2c4203cd7c42960cac895987c43a17dff052e",
          "message": "chore: automate running benchmarks (#3140)\n\nUses Github actions to run benchmarks.",
          "timestamp": "2020-11-13T19:30:52-08:00",
          "tree_id": "f4a3cfebafb7afee68d6d4de1748daddcfc070c6",
          "url": "https://github.com/tokio-rs/tokio/commit/97c2c4203cd7c42960cac895987c43a17dff052e"
        },
        "date": 1605324759979,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6516564,
            "range": "± 2673764",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6603280,
            "range": "± 1010301",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 5967313,
            "range": "± 2223714",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 604,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 606,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 604,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 45361,
            "range": "± 1799",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 835,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1120543,
            "range": "± 16131",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 800918,
            "range": "± 22116",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "masnagam@gmail.com",
            "name": "masnagam",
            "username": "masnagam"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4e39c9b818eb8af064bb9f45f47e3cfc6593de95",
          "message": "net: restore TcpStream::{poll_read_ready, poll_write_ready} (#2743)",
          "timestamp": "2020-11-16T09:51:06-08:00",
          "tree_id": "2222dd2f8638fb64f228badef84814d2f4079a82",
          "url": "https://github.com/tokio-rs/tokio/commit/4e39c9b818eb8af064bb9f45f47e3cfc6593de95"
        },
        "date": 1605549207449,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6803300,
            "range": "± 2440677",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6651924,
            "range": "± 1480231",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6405364,
            "range": "± 2450565",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 668,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 667,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 667,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 50192,
            "range": "± 929",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 799,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1118325,
            "range": "± 21375",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 816811,
            "range": "± 316994",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eliza@buoyant.io",
            "name": "Eliza Weisman",
            "username": "hawkw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f5cb4c20422a35b51bfba3391744f8bcb54f7581",
          "message": "net: Add send/recv buf size methods to `TcpSocket` (#3145)\n\nThis commit adds `set_{send, recv}_buffer_size` methods to `TcpSocket`\r\nfor setting the size of the TCP send and receive buffers, and `{send,\r\nrecv}_buffer_size` methods for returning the current value. These just\r\ncall into similar methods on `mio`'s `TcpSocket` type, which were added\r\nin tokio-rs/mio#1384.\r\n\r\nRefs: #3082\r\n\r\nSigned-off-by: Eliza Weisman <eliza@buoyant.io>",
          "timestamp": "2020-11-16T12:29:03-08:00",
          "tree_id": "fcf642984a21d04533efad0cdde613d294635c4d",
          "url": "https://github.com/tokio-rs/tokio/commit/f5cb4c20422a35b51bfba3391744f8bcb54f7581"
        },
        "date": 1605558683599,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6754053,
            "range": "± 2766922",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6486377,
            "range": "± 1920826",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6544483,
            "range": "± 3004414",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 834,
            "range": "± 375",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 842,
            "range": "± 301",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 845,
            "range": "± 160",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 57023,
            "range": "± 7455",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1048,
            "range": "± 182",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1072969,
            "range": "± 131055",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 764003,
            "range": "± 148570",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zaharidichev@gmail.com",
            "name": "Zahari Dichev",
            "username": "zaharidichev"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d0ebb4154748166a4ba07baa4b424a1c45efd219",
          "message": "sync: add `Notify::notify_waiters` (#3098)\n\nThis PR makes `Notify::notify_waiters` public. The method\r\nalready exists, but it changes the way `notify_waiters`,\r\nis used. Previously in order for the consumer to\r\nregister interest, in a notification triggered by\r\n`notify_waiters`, the `Notified` future had to be\r\npolled. This introduced friction when using the api\r\nas the future had to be pinned before polled.\r\n\r\nThis change introduces a counter that tracks how many\r\ntimes `notified_waiters` has been called. Upon creation of\r\nthe future the number of times is loaded. When first\r\npolled the future compares this number with the count\r\nstate of the `Notify` type. This avoids the need for\r\nregistering the waiter upfront.\r\n\r\nFixes: #3066",
          "timestamp": "2020-11-16T12:49:35-08:00",
          "tree_id": "5ea4d611256290f62baea1a9ffa3333b254181df",
          "url": "https://github.com/tokio-rs/tokio/commit/d0ebb4154748166a4ba07baa4b424a1c45efd219"
        },
        "date": 1605559901295,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 5738427,
            "range": "± 2801992",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 5782978,
            "range": "± 1550441",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 4938344,
            "range": "± 2609337",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 646,
            "range": "± 137",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 616,
            "range": "± 175",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 656,
            "range": "± 112",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 52459,
            "range": "± 9246",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 787,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 876850,
            "range": "± 128609",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 630049,
            "range": "± 83042",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0ea23076503c5151d68a781a3d91823396c82949",
          "message": "net: add UdpSocket readiness and non-blocking ops (#3138)\n\nAdds `ready()`, `readable()`, and `writable()` async methods for waiting\r\nfor socket readiness. Adds `try_send`, `try_send_to`, `try_recv`, and\r\n`try_recv_from` for performing non-blocking operations on the socket.\r\n\r\nThis is the UDP equivalent of #3130.",
          "timestamp": "2020-11-16T15:44:01-08:00",
          "tree_id": "1e49d7dc0bb3cee6271133d942ba49c5971fde29",
          "url": "https://github.com/tokio-rs/tokio/commit/0ea23076503c5151d68a781a3d91823396c82949"
        },
        "date": 1605570390864,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 7194053,
            "range": "± 2331201",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6928458,
            "range": "± 1519084",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6464793,
            "range": "± 2430089",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 923,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 911,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 920,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 66036,
            "range": "± 6878",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1092,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1172665,
            "range": "± 151747",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 792689,
            "range": "± 98126",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "9832640+zekisherif@users.noreply.github.com",
            "name": "Zeki Sherif",
            "username": "zekisherif"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7d11aa866837eea50a6f1e0ef7e24846a653cbf1",
          "message": "net: add SO_LINGER get/set to TcpStream (#3143)",
          "timestamp": "2020-11-17T09:58:00-08:00",
          "tree_id": "ca0d5edc04a29bbe6e2906c760a22908e032a4c9",
          "url": "https://github.com/tokio-rs/tokio/commit/7d11aa866837eea50a6f1e0ef7e24846a653cbf1"
        },
        "date": 1605636006243,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6386215,
            "range": "± 2561315",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6223133,
            "range": "± 1216930",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 5641856,
            "range": "± 2812615",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 782,
            "range": "± 160",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 771,
            "range": "± 114",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 748,
            "range": "± 136",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 56412,
            "range": "± 10956",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 968,
            "range": "± 153",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1047860,
            "range": "± 157168",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 699818,
            "range": "± 128883",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "34fcef258b84d17f8d418b39eb61fa07fa87c390",
          "message": "io: add vectored writes to `AsyncWrite` (#3149)\n\nThis adds `AsyncWrite::poll_write_vectored`, and implements it for\r\n`TcpStream` and `UnixStream`.\r\n\r\nRefs: #3135.",
          "timestamp": "2020-11-18T10:41:47-08:00",
          "tree_id": "98e37fc2d6fa541a9e499331df86ba3d1b7b6e3a",
          "url": "https://github.com/tokio-rs/tokio/commit/34fcef258b84d17f8d418b39eb61fa07fa87c390"
        },
        "date": 1605725015672,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6265900,
            "range": "± 1903787",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 5980619,
            "range": "± 1425562",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 5608356,
            "range": "± 1837833",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 553,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 551,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 551,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 32381,
            "range": "± 3229",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 747,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 952719,
            "range": "± 1921",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 690909,
            "range": "± 15989",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "479c545c20b2cb44a8f09600733adc8c8dcb5aa0",
          "message": "chore: prepare v0.3.4 release (#3152)",
          "timestamp": "2020-11-18T12:38:13-08:00",
          "tree_id": "df6daba6b2f595de47ada2dd2f518475669ab919",
          "url": "https://github.com/tokio-rs/tokio/commit/479c545c20b2cb44a8f09600733adc8c8dcb5aa0"
        },
        "date": 1605732057947,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6429590,
            "range": "± 1921395",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6087351,
            "range": "± 1216119",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 5570765,
            "range": "± 1754220",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 494,
            "range": "± 133",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 489,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 518,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 39959,
            "range": "± 4920",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 720,
            "range": "± 116",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 973766,
            "range": "± 210658",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 681859,
            "range": "± 151210",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "49abfdb2ac7f564c638ef99b973b1ab7a2b7ec84",
          "message": "util: fix typo in udp/frame.rs (#3154)",
          "timestamp": "2020-11-20T15:06:14+09:00",
          "tree_id": "f09954c70e26336bdb1bc525f832916c2d7037bf",
          "url": "https://github.com/tokio-rs/tokio/commit/49abfdb2ac7f564c638ef99b973b1ab7a2b7ec84"
        },
        "date": 1605852504276,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6976499,
            "range": "± 2320668",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 7088300,
            "range": "± 1690727",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6373230,
            "range": "± 2466055",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 805,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 803,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 803,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 49997,
            "range": "± 1458",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 871,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1147945,
            "range": "± 6018",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 836883,
            "range": "± 6205",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eliza@buoyant.io",
            "name": "Eliza Weisman",
            "username": "hawkw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f927f01a34d7cedf0cdc820f729a7a6cd56e83dd",
          "message": "macros: fix rustfmt on 1.48.0 (#3160)\n\n## Motivation\r\n\r\nLooks like the Rust 1.48.0 version of `rustfmt` changed some formatting\r\nrules (fixed some bugs?), and some of the code in `tokio-macros` is no\r\nlonger correctly formatted. This is breaking CI.\r\n\r\n## Solution\r\n\r\nThis commit runs rustfmt on Rust 1.48.0. This fixes CI.\r\n\r\nCloses #3158",
          "timestamp": "2020-11-20T10:19:26-08:00",
          "tree_id": "bd0243a653ee49cfc50bf61b00a36cc0fce6a414",
          "url": "https://github.com/tokio-rs/tokio/commit/f927f01a34d7cedf0cdc820f729a7a6cd56e83dd"
        },
        "date": 1605896470436,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6396651,
            "range": "± 2089250",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6210787,
            "range": "± 1599888",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 5777463,
            "range": "± 2201398",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 876,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 879,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 877,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 55799,
            "range": "± 2028",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1076,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1092314,
            "range": "± 31319",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 774222,
            "range": "± 43076",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bdonlan@gmail.com",
            "name": "bdonlan",
            "username": "bdonlan"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ae67851f11b7cc1f577de8ce21767ce3e2c7aff9",
          "message": "time: use intrusive lists for timer tracking (#3080)\n\nMore-or-less a half-rewrite of the current time driver, supporting the\r\nuse of intrusive futures for timer registration.\r\n\r\nFixes: #3028, #3069",
          "timestamp": "2020-11-23T10:42:50-08:00",
          "tree_id": "be43cb76333b0e9e42a101d659f9b2e41555d779",
          "url": "https://github.com/tokio-rs/tokio/commit/ae67851f11b7cc1f577de8ce21767ce3e2c7aff9"
        },
        "date": 1606157077076,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6854697,
            "range": "± 2268317",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6837935,
            "range": "± 1397559",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6191297,
            "range": "± 2218839",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 626,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 628,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 627,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 53804,
            "range": "± 14664",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 862,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1190306,
            "range": "± 10627",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 839804,
            "range": "± 30196",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "driftluo@foxmail.com",
            "name": "漂流",
            "username": "driftluo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "874fc3320bc000fee20d63b3ad865a1145122640",
          "message": "codec: add read_buffer_mut to FramedRead (#3166)",
          "timestamp": "2020-11-24T09:39:16+01:00",
          "tree_id": "53540b744f6a915cedc1099afe1b0639443b2436",
          "url": "https://github.com/tokio-rs/tokio/commit/874fc3320bc000fee20d63b3ad865a1145122640"
        },
        "date": 1606207272816,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6874876,
            "range": "± 2264622",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 7077282,
            "range": "± 1761310",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6583352,
            "range": "± 2602094",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 593,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 626,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 612,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 52823,
            "range": "± 5057",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 849,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1132312,
            "range": "± 46554",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 802557,
            "range": "± 80118",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github@max.sharnoff.org",
            "name": "Max Sharnoff",
            "username": "sharnoff"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "de33ee85ce61377b316b630e4355d419cc4abcb7",
          "message": "time: replace 'ouClockTimeide' in internal docs with 'outside' (#3171)",
          "timestamp": "2020-11-24T10:23:20+01:00",
          "tree_id": "5ed85f95ea1846983471a11fe555328e6b0f5f6f",
          "url": "https://github.com/tokio-rs/tokio/commit/de33ee85ce61377b316b630e4355d419cc4abcb7"
        },
        "date": 1606209916541,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6773998,
            "range": "± 2121267",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6803850,
            "range": "± 1404717",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 5803786,
            "range": "± 2319369",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 595,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 605,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 601,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 49827,
            "range": "± 1373",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 824,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1145595,
            "range": "± 101979",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 822752,
            "range": "± 13086",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rajiv.chauhan@gmail.com",
            "name": "Rajiv Chauhan",
            "username": "chauhraj"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5e406a7a47699d93fa2a77fb72553600cb7abd0f",
          "message": "macros: fix outdated documentation (#3180)\n\n1. Changed 0.2 to 0.3\r\n2. Changed ‘multi’ to ‘single’ to indicate that the behavior is single threaded",
          "timestamp": "2020-11-26T19:46:15+01:00",
          "tree_id": "ac6898684e4b84e4a5d0e781adf42d950bbc9e43",
          "url": "https://github.com/tokio-rs/tokio/commit/5e406a7a47699d93fa2a77fb72553600cb7abd0f"
        },
        "date": 1606416482810,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6545251,
            "range": "± 2437278",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6273179,
            "range": "± 1874503",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 5864333,
            "range": "± 2511343",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 823,
            "range": "± 146",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 823,
            "range": "± 243",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 823,
            "range": "± 205",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 56599,
            "range": "± 12354",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1034,
            "range": "± 228",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1102654,
            "range": "± 761186",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 768163,
            "range": "± 118088",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "heng@cantab.net",
            "name": "Henry Gomersall",
            "username": "hgomersall"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5402c948eebbb4c6c695e156d68ce495a43ea81a",
          "message": "io: clarify AsyncFd docs about changes of the inner fd (#3430)",
          "timestamp": "2021-01-17T21:39:58+01:00",
          "tree_id": "63ed16dcd34c11314b7bda2dcb983946b5669a1e",
          "url": "https://github.com/surechen/tokio/commit/5402c948eebbb4c6c695e156d68ce495a43ea81a"
        },
        "date": 1611020529460,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 7326734,
            "range": "± 2084980",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6955362,
            "range": "± 1360507",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6591748,
            "range": "± 2518818",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 805,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 682,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 665,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 85941,
            "range": "± 4900",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1561,
            "range": "± 249",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1234932,
            "range": "± 13687",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 852698,
            "range": "± 32217",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alice@ryhl.io",
            "name": "Alice Ryhl",
            "username": "Darksonn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c6f08120d0e8764f5ff4d474ded342c85d9b188d",
          "message": "task: add LocalSet example (#3438)",
          "timestamp": "2021-01-21T16:36:26+01:00",
          "tree_id": "dfc6d5e2eb2113d89db0940b1517833cb30a745f",
          "url": "https://github.com/surechen/tokio/commit/c6f08120d0e8764f5ff4d474ded342c85d9b188d"
        },
        "date": 1611300443745,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6127918,
            "range": "± 2006594",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 5921788,
            "range": "± 1420564",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 5733735,
            "range": "± 2586360",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 489,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 494,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 494,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 64258,
            "range": "± 5117",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1187,
            "range": "± 197",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 970286,
            "range": "± 320062",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 687361,
            "range": "± 6932",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "artem@vorotnikov.me",
            "name": "Artem Vorotnikov",
            "username": "vorot93"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cc97fb8a5ff6ef17f6dc9968fbbe67002cff4130",
          "message": "Suppress deprecated warnings for spin_loop_hint (#3497)\n\n* Suppress deprecated warnings for spin_loop_hint\n\n* Update tokio/src/loom/std/mod.rs\n\nCo-authored-by: Taiki Endo <te316e89@gmail.com>\n\n* Update tokio/src/sync/task/atomic_waker.rs\n\nCo-authored-by: Taiki Endo <te316e89@gmail.com>\n\n* fmt\n\nCo-authored-by: Taiki Endo <te316e89@gmail.com>",
          "timestamp": "2021-02-01T15:55:21+03:00",
          "tree_id": "effd8bf970f9044cf0ebe0b3cd8446b297b3efc8",
          "url": "https://github.com/surechen/tokio/commit/cc97fb8a5ff6ef17f6dc9968fbbe67002cff4130"
        },
        "date": 1612339989890,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6300882,
            "range": "± 2624140",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6043566,
            "range": "± 1680941",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 5792458,
            "range": "± 2465815",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 614,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 616,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 613,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 73234,
            "range": "± 2643",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1305,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 986305,
            "range": "± 5366",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 708624,
            "range": "± 12649",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}