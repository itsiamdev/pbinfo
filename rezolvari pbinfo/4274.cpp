#include <iostream>

using namespace std;

int main()
{
    char c;
    int n, i=1, j;
    cin >> n >> c;
    while (i <= n)
    {
        for (j = 1; j <= i; j++)
            cout << c;
        cout << endl;
        i++;
    }
    i = n;
    while(i>0)
    {
        for (j = n; j > i; j--)
            cout << " ";
        for (j = 1; j <= i; j++)
            cout << c;
        cout << endl;
        i--;
    }
}