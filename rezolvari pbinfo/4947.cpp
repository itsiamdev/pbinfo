#include <iostream>
#include <fstream>
using namespace std;

int main() {
    ifstream fin("kendama.in");
    ofstream fout("kendama.out");

    int n, x;
    int peste7 = 0, sub7 = 0, sub6 = 0;
    int nota10 = 0, nota9 = 0;
    int maxim = 0;

    fin >> n;

    for (int i = 1; i <= n; i++) {
        fin >> x;

        if (x > 7)
            peste7++;

        if (x < 7)
            sub7++;

        if (x < 6)
            sub6++;

        if (x == 10)
            nota10++;

        if (x == 9)
            nota9++;

        if (x > maxim)
            maxim = x;
    }

    if (peste7 > sub7) {
        fout << maxim;
    }
    else if (peste7 == sub7) {
        if (nota10 > nota9) {
            fout << maxim;
        }
        else if (sub6 == 0) {
            fout << maxim;
        }
        else {
            fout << sub6;
        }
    }
    else {
        fout << sub6;
    }

    fin.close();
    fout.close();

    return 0;
}
