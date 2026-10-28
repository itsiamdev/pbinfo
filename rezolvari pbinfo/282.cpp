#include <fstream>
#include <iostream>

using namespace std;

int main(void)
{
    int n, start = 1, end = 1, i = 1;
    float m, x;

    fstream fin("pozmax.in");
    ofstream fout("pozmax.out");

    fin >> n;
    fin >> m;

    n--;

    while(n--) {
        fin >> x;
        if(x > m) {
            start = i + 1;
            end = i + 1;
            m = x;
        } else if(x == m)
            end = i + 1;
        i++;
    }

    fout << start << " " << end;

    return 0;
}