#include <iostream>

using namespace std;

int main()
{
    int n;
    cin >> n;
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < i; j++)
        {
            cout << " ";
        }
        for (int k = 0; k <= i; k++)
        {
            cout << "*";
        }
        cout << endl;
    }
    for (int i = 0; i < n-1; i++)
    {
        for (int j = 2; j < n-i; j++)
        {
            cout << " ";
        }
        for (int k = 1; k < n-i; k++)
        {
            cout << "*";
        }
        cout << endl;
    }
    return 0;
}