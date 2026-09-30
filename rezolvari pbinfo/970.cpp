#include <iostream>
#include <cmath>
#include <fstream>      
using namespace std;

ifstream fin("date.in");
ofstream fout("date.out");

int main()

{
    int n, k;
    cin >> n >> k;
    for (int i = 1; i <= n; i++)
        cout << 1;
    cout << "01";
    for (int i = 1; i <= k; i++)
        cout << 0;
    cout << 10;
   

    return 0;
}