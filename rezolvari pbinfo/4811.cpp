
#include <iostream>
#include <fstream>
using namespace std;

int main() {
    ifstream fin("avion.in");
    ofstream fout("avion.out");

    int c, NR, n;
    fin >> c >> NR >> n;

    int total = 0;

    for (int i = 1; i <= n; i++) {
        int r, s;
        fin >> r >> s;

        int ds;

        if (s == 1 || s == 6)
            ds = 3;
        else if (s == 2 || s == 5)
            ds = 2;
        else
            ds = 1;

        int d1 = 3 + r + ds;
        int d2 = 3 + (NR - r + 1) + ds;

        if (c == 1) {
            if (d1 <= d2)
                fout << 1 << '\n';
            else
                fout << 2 << '\n';
        } else {
            if (d1 <= d2)
                total += d1;
            else
                total += d2;
        }
    }

    if (c == 2)
        fout << total;

    fin.close();
    fout.close();

    return 0;
}