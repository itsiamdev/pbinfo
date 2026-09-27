#include <iostream>
#include <fstream>
#include <algorithm>

using namespace std;

int main() {
    ifstream fin("k2.in");
    ofstream fout("k2.out");

    int c;
    long long n;
    if (!(fin >> c >> n)) return 0;

    // Căutare binară pentru a găsi vârful m al rotirii curente
    long long low = 2, high = 2000000000LL;
    long long m = high;
    while (low <= high) {
        long long mid = low + (high - low) / 2;
        if (mid * (mid - 1) >= n) {
            m = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    long long prev_sum = (m - 1) * (m - 2);
    long long rem = n - prev_sum; // Indexul ștampilei în rotirea curentă

    if (c == 1) {
        long long max_camp;
        if (rem <= m - 1) {
            max_camp = max(m - 1, rem + 1);
        } else {
            max_camp = m;
        }
        fout << max_camp << "\n";
    } else {
        long long last_camp;
        if (rem <= m - 1) {
            last_camp = rem + 1;
        } else {
            last_camp = 2 * m - 1 - rem;
        }
        fout << last_camp << "\n";
    }

    fin.close();
    fout.close();
    return 0;
}