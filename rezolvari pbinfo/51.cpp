#include <iostream>
using namespace std;

int main() {
	int nr, s = 0;
    do {
    	cin >> nr;
        s += nr;
    } while(nr != 0);
    cout << s;
}