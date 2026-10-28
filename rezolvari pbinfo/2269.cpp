#include <fstream>

using namespace std;
ifstream fin("maximpar.in");
ofstream fout("maximpar.out");

int n, x, maxx = -1, nr;

int main() {
    fin >> n;

    for (int i = 0; i < n; i++) {
        fin >> x;
        if(x % 2 == 0) {
            if(x == maxx)
                nr++;
            else if (x > maxx) {
                maxx = x;
                nr = 1;
            }
        }
    }

    if(maxx == -1)
        fout << "-1\n";
    else
        fout << maxx << " " << nr << "\n";

    return 0;
}