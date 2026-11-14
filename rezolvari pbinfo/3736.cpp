#include    <iostream>
#include    <fstream>
#include    <cmath>
#include    <bits/stdc++.h>
#include    <algorithm>

using namespace std;

ifstream fin("sir.in");
ofstream fout("sir.out");


int main() {

    int n, cer;
    long long sir[100000], x = -999, maxima = -9, maximb = -9;

    fin >> cer >> n;

    for(long long i = 1; i <= n; i++){
        fin >> sir[i];
        if (x < sir[i]){
            x = sir[i];
            maxima = i;
            maximb = i;
        }
        else if (x == sir[i]){
            maximb = i;
        }
    }

    if (cer == 1){
        for(long long i = 1; i <= n; i++){
            bool ver = 0;
            for(long long j = i + 1; j <= n; j++){
                if (sir[i] <= sir[j]){
                    ver = 1;
                    break;
                }
            }
            if (ver == 0){
                fout << i;
                break;
            }
        }
    }
    else if (cer == 2){
        for(long long i = 1; i <= n; i++){
            bool ver = 0;
            for(long long j = i - 1; j >= 1; j--){
                if (sir[i] <= sir[j]){
                    ver = 1;
                    break;
                }
            }
            if (ver == 0){
                fout << i << " ";
            }
        }
    }
    else{
        //cout << maxima << " " << maximb;

        if (maxima == maximb){
            fout << "0";
        }
        else{
            long long s = 0;
            for(int i = maxima; i <= maximb; i++){
                if (sir[i] <= x)
                    s = s + (x - sir[i]);
            }
            fout << s;
        }
    }
    return 0;
}