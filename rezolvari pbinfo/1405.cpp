#include <iostream>

using namespace std;


int main()
{
    short int n;

    int k = 1;

    cin >> n;

    for(int i = 1; i <= n; i++){
        for(int j = 1; j <= n - i; j++)
            cout << "#";
        for(int j = 1; j <= k; j++)
            cout << "*";
        for(int j = 1; j <= n - i; j++)
            cout << "#";
        cout << endl;
        k+=2;
    }

    k-=2;

    for(int i = n - 1; i >= 1; i--){
        for(int j = n - i; j >= 1; j--)
            cout << "#";
        for(int j = k - 2; j >= 1; j--)
            cout << "*";
        for(int j = n - i; j >= 1; j--)
            cout << "#";
        cout << endl;
        k-=2;
    }

    return 0;
}