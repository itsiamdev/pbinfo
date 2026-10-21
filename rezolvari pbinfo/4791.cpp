
#include <fstream>
#include <algorithm>
using namespace std;

ifstream fin("semafoare.in");
ofstream fout("semafoare.out");

using ll = long long;

ll R1, G1, V1, R2, G2, V2, T1, T2;
ll P1, P2;

int culoare(ll t, ll R, ll G, ll V) {
    ll p = t % (R + 2 * G + V);

    if (p < R)
        return 0; // rosu

    if (p < R + G)
        return 1; // galben

    if (p < R + G + V)
        return 2; // verde

    return 1; // galben
}

ll schimbare(ll t, ll R, ll G, ll V) {
    ll P = R + 2 * G + V;
    ll p = t % P;

    if (p < R)
        return R - p;

    if (p < R + G)
        return R + G - p;

    if (p < R + G + V)
        return R + G + V - p;

    return P - p;
}

ll panaLaVerde(ll T, ll R, ll G, ll V) {
    ll P = R + 2 * G + V;
    ll p = T % P;

    if (p < R + G)
        return R + G - p;

    return P - p + R + G;
}

int main() {
    int C;
    fin >> C;

    fin >> R1 >> G1 >> V1;
    fin >> R2 >> G2 >> V2;
    fin >> T1 >> T2;

    P1 = R1 + 2 * G1 + V1;
    P2 = R2 + 2 * G2 + V2;

    if (C == 1) {
        fout << min(
            panaLaVerde(T1, R1, G1, V1),
            panaLaVerde(T2, R2, G2, V2)
        );
    } else {
        ll timp = 0;

        while (culoare(T1 + timp, R1, G1, V1) !=
               culoare(T2 + timp, R2, G2, V2)) {

            ll d1 = schimbare(T1 + timp, R1, G1, V1);
            ll d2 = schimbare(T2 + timp, R2, G2, V2);

            timp += min(d1, d2);
        }

        fout << timp;
    }

    fin.close();
    fout.close();

    return 0;
}
