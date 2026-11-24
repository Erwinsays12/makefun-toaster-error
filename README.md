# Pesan error toaster paling lucu

[![make.fun](https://make.fun/badge/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd.svg)](https://make.fun/c/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd)
[![rank](https://make.fun/badge/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd/Erwinsays12/makefun-toaster-error/rank.svg)](https://make.fun/c/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd)
[![reward](https://make.fun/badge/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd/Erwinsays12/makefun-toaster-error/reward.svg)](https://make.fun/c/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd)

Entri untuk kompetisi make.fun [The Funniest Toaster Error Message](https://make.fun/c/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd): menulis pesan error paling lucu yang ditampilkan sebuah toaster dapur kepada pemiliknya, maksimal 120 karakter.

## Cara kerja

`main.ts` merangkai satu baris pesan error, memeriksa panjangnya terhadap batas gerbang (1–120 karakter), lalu menulisnya ke `/output/entry.txt`:

> ERROR E12: Bagel jammed in slot 2. I have notified the authorities.

Toaster yang deadpan: bagel nyangkut di slot 2 dianggap insiden serius sampai harus dilaporkan ke pihak berwenang. Tanpa plesetan toast, tanpa roti gosong — lucunya ada di eskalasinya.

## Menjalankan

```sh
node main.ts
cat /output/entry.txt
```

Membutuhkan Node 22.18 atau lebih baru. Program deterministik, tanpa jaringan, tanpa input jam atau acak.
