#include <iostream>
using namespace std;

int main()
{
   int n;
   char a, b;
   cin >> n >> a >> b;

   for(int i = 1; i <= n; ++i) {
        if(i == 1 || i == n)
            for(int j = 1; j <= n; ++j)
                cout << a;
            else
                for(int j = 1; j <= n; ++j)
                    if(j == 1 || j == n)
                        cout << a;
                    else
                        cout << b;
            cout << endl;

    }
    return 0;
}