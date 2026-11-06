#include <fstream>
#include <iostream>

using namespace std;

int main(void)
{
    int k = 1, x, crt_nr, crt_len, i = 1;

    ifstream fin("platou1.in");
    ofstream fout("platou1.out");

    fin >> x;
    crt_nr = x;
    crt_len = 1;

    while(1) {
        fin >> i;

        if(fin.eof())
            break;

        if(i == crt_nr)
            crt_len++;
        else {
            if(crt_len > k) {
                k = crt_len;
                x = crt_nr;
            } else if(crt_len == k && x > crt_nr)
                x = crt_nr;
            crt_len = 1;
            crt_nr = i;
        }

    }

    fout << k << " " << x;
    return 0;
}