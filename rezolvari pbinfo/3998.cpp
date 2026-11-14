#include <iostream>
#include <fstream>
#include <cmath>
#include <bitset>
#include <cstring>
#include <iomanip>
#include <algorithm>
using namespace std;

string  nume = "date";

ifstream fin(nume + ".in");
ofstream fout(nume + ".out");

typedef unsigned long long ull;
typedef long long ll;

int main()
{
	ull n, a, b, s = 0;
	cin >> n;
	for (int i = 1; i <= n; i++)
	{
		cin >> a >> b;
		s += max(a, b);
	}
	cout << s;
}