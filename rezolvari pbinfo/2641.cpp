#include <iostream>
#include <fstream>

using namespace std;

int main() {
    ifstream fin("af.in");
    ofstream fout("af.out");

    int n;
    if (!(fin >> n)) return 0;

    for (int i = 0; i < n; ++i) {
        long long nr1, nr2, nr3;
        char op, eq;
        fin >> nr1 >> op >> nr2 >> eq >> nr3;

        bool adevarat = false;

        if (op == '+') {
            if (nr1 + nr2 == nr3) adevarat = true;
        } else if (op == '-') {
            if (nr1 - nr2 == nr3) adevarat = true;
        } else if (op == 'x') {
            if (nr1 * nr2 == nr3) adevarat = true;
        } else if (op == ':') {
            if (nr2 != 0 && nr1 / nr2 == nr3) adevarat = true;
        }

        if (adevarat) {
            fout << "Adevarat\n";
        } else {
            fout << "Fals\n";
        }
    }

    fin.close();
    fout.close();
    return 0;
}