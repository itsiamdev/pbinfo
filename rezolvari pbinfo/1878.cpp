#include <iostream>
#include <fstream>

using namespace std;

int main()
{
    int x, y, z, finished = 0;
    ifstream fin("nrasoc.in");
    ofstream fout("nrasoc.out");

    fin >> x >> y;

    while (!finished && fin >> z) {
        if (x >= z) {
            fout << x << " ";
            x = y;
            y = z;
        } else
           finished = 1;
    }

    if (finished) {
        fout << z << " ";
        while (fin >> z)
            fout << z << " ";
    }

    return 0;
}