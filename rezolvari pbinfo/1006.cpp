#include <bits/stdc++.h>
using namespace std;
int main()
{
    for(int i = 1 ; i <= 5 ; ++i)
    {
        for(int j = i+1 ; j <= 6 ; ++j)
        {
            for(int n = j+1 ; n <= 7 ; ++n)
            {
                for(int m = n+1; m <= 8 ; ++m)
                {
                    for(int k = m+1 ; k <= 9 ; ++k)
                    {
                        cout << i << j << n << m << k << m << n << j << i << endl;    
                    }
                }
            }
        }
    }
    return 0;
} 